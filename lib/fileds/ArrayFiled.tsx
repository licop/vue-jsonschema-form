import { defineComponent, type PropType } from 'vue';
import { createUseStyles } from 'vue-jss';
import { FiledPropsDefine, type Schema } from '../types'
import { useVJSFContext } from '../context';
import { getWidget } from '../theme';

const useStyles = createUseStyles({
  container: {
    border: '1px solid #eee'
  },
  actions: {
    background: '#eee',
    padding: 10,
    textAlign: 'right'
  },
  action: {
    '& + &': {
      marginLeft: 10
    } 
  },
  content: {
    padding: 10
  }
})

const ArrayItemWrapper = defineComponent({
  name: 'ArrayItemWrapper',
  props: {
    onAdd: {
      type: Function as PropType<(index: number) => void>,
      required: true
    },
    onDelete: {
      type: Function as PropType<(index: number) => void>,
      required: true
    },
    onUp: {
      type: Function as PropType<(index: number) => void>,
      required: true
    },
    onDown: {
      type: Function as PropType<(index: number) => void>,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  setup(props, { slots }) {
    const classesRef = useStyles()

    return () => {
      const classes = classesRef.value

      return <div class={classes.container}>
        <div class={classes.actions}>
          <button class={classes.action} onClick={() => props.onAdd(props.index)}>新增</button>
          <button class={classes.action} onClick={() => props.onDelete(props.index)}>删除</button>
          <button class={classes.action} onClick={() => props.onUp(props.index)}>上移</button>
          <button class={classes.action} onClick={() => props.onDown(props.index)}>下移</button>
        </div>
        <div class={classes.content}>
          {slots.default && slots.default()}
        </div>
      </div>
    }
  }
})

export default defineComponent({
  name: 'ArrayField',
  props: FiledPropsDefine,
  setup(props, ctx) {
    
    const context = useVJSFContext()
    
    const handleArrayItemChange = (v: any, index: number) => {
      const { value }  = props
      const arr = Array.isArray(value) ? value : []
      
      arr[index] = v

      props.onChange(arr)
    }

    const handleAdd = (index: number) => {
      const { value }  = props
      const arr = Array.isArray(value) ? value : []

      arr.splice(index + 1, 0, undefined)

      props.onChange(arr)
    }

    const handleDelete = (index: number) => {
      const { value }  = props
      const arr = Array.isArray(value) ? value : []

      arr.splice(index, 1)

      props.onChange(arr)
    }

    const handleUp = (index: number) => {
      if (index === 0) return 
      const { value }  = props
      const arr = Array.isArray(value) ? value : []

      const item = arr.splice(index, 1)
      arr.splice(index - 1, 0, item[0])

      props.onChange(arr)
    }

    const handleDown = (index: number) => {
      const { value }  = props
      const arr = Array.isArray(value) ? value : []
       
      if(index === arr.length - 1) return 

      const item = arr.splice(index, 1)
      arr.splice(index + 1, 0, item[0])

      props.onChange(arr)
    }

    const SelectionWidgetRef = getWidget('SelectionWidget')

    return () => {
      const { schema, rootSchema, value, errorSchema, uiSchema } = props
      const SchemaItem = context.SchemaItem
      const SelectionWidget = SelectionWidgetRef.value

      const isMultiType = Array.isArray(schema.items)
      const isSelect = schema.items && (schema.items as any).enum

      if(isMultiType) {
        const items: Schema[] = schema.items as any
        const arr = Array.isArray(value) ? value : []
        return items.map((s: Schema, index: number) => {
          const itemsUiSchema = uiSchema.items
          const us = Array.isArray(itemsUiSchema)
            ? itemsUiSchema[index] || {}
            : itemsUiSchema || {}

          return (<SchemaItem 
            schema={s} 
            uiSchema={us}
            key={index} 
            rootSchema={rootSchema} 
            value={arr[index]}
            errorSchema={errorSchema[index] || {}}
            onChange={(v: any) => handleArrayItemChange(v, index)} 
          />)
        }) 
      } else if(!isSelect) {
        const arr = Array.isArray(value) ? value : []
        
        return arr.map((v: any, index: number) => {
          return (
            <ArrayItemWrapper
              index={index}
              onAdd={handleAdd}
              onDelete={handleDelete}
              onUp={handleUp}
              onDown={handleDown}
            >
              <SchemaItem 
                schema={schema.items as Schema}
                uiSchema={(uiSchema.items as any) || {}}
                value={v}
                key={index}
                rootSchema={rootSchema}
                errorSchema={errorSchema[index] || {}} 
                onChange={(v: any) => handleArrayItemChange(v, index)} 
              />
            </ArrayItemWrapper>
          )
        })
      } else {
        const enumOptions = (schema as any).items.enum
        const options = enumOptions.map((e: any) => ({
          key: e,
          value: e
        }))

        return <SelectionWidget 
          onChange={props.onChange} 
          value={props.value} 
          options={options} 
          errors={errorSchema.__errors}
          schema={schema}
        />
      }
    }
  }
})



/**
 * {
 *   items: { type: string }
 * }
 * 
 * {
 *   items: [
 *     { type: string },
 *     { type: number }
 *   ]
 * }
 * 
 * {
 *   items: { type: string, enum: ['1', '2'] }
 * }
 */