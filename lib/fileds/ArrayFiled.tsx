import { defineComponent } from 'vue';
import {FiledPropsDefine, type Schema} from '../types'
import { useVJSFContext } from '../context';

export default defineComponent({
  name: 'ArrayField',
  props: FiledPropsDefine,
  setup(props, ctx) {
    
    const context = useVJSFContext()
    
    const handleMutiTypeChange = (v: any, index: number) => {
      const { value }  = props
      const arr = Array.isArray(value) ? value : []
      
      arr[index] = v

      props.onChange(arr)
    }

    return () => {
      const { schema, rootSchema, value } = props
      const SchemaItem = context.SchemaItem
      
      const isMultiType = Array.isArray(schema.items)
      
      console.log(isMultiType, schema.items, 27)
      if(isMultiType) {

        const items: Schema[] = schema.items as any
        const arr = Array.isArray(value) ? value : []
        return items.map((s: Schema, index: number) => (
          <SchemaItem 
            schema={s} 
            key={index} 
            rootSchema={rootSchema} 
            value={arr[index]}
            onChange={(v: any) => handleMutiTypeChange(v, index)} 
          />
        )) 
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