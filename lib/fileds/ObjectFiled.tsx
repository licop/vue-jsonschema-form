import { defineComponent, inject, type DefineComponent, type ExtractPropTypes } from 'vue';
import { FiledPropsDefine } from '../types';
import { SchemaFormContextKey } from '../context';
import { isObject } from '../utils';

// 定义组件类型
type SchemaItemDefine = DefineComponent<ExtractPropTypes<typeof FiledPropsDefine>>

export default defineComponent({
  name: 'ObjectField',
  props: FiledPropsDefine,
  setup(props) {
    const context: { SchemaItem: SchemaItemDefine } | undefined = inject(SchemaFormContextKey)
     
    if(!context) {
      throw Error('SchemaForm should be used')
    }

    const handleObjectFieldChange = (key: string, v: any) => {
      const value: any = isObject(props.value) ? props.value : {}

      if(v === undefined) {
        delete value[key]
      } else {
        value[key] = v
      }

      props.onChange(value)
    }

    return () => {
      const { schema, rootSchema, value} = props

      const { SchemaItem } = context
      const properties = schema.properties || {}

      const currentValue: any = isObject(value) ? value : {}
      
      return Object.keys(properties).map((k: string, index: number) => (
        <SchemaItem 
          schema={properties[k]} 
          rootSchema={rootSchema} 
          value={currentValue[k]} 
          key={index}
          onChange={(v: any) => handleObjectFieldChange(k, v)}  
        />        
      ))
    }
  }
})