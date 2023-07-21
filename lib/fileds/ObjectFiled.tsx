import { defineComponent, inject } from 'vue';
import { FiledPropsDefine } from '../types';
import { useVJSFContext } from '../context';
import { isObject } from '../utils';

// 定义组件类型
export default defineComponent({
  name: 'ObjectField',
  props: FiledPropsDefine,
  setup(props) {
    const context = useVJSFContext()
    
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
      const { schema, rootSchema, value, errorSchema, uiSchema} = props

      const { SchemaItem } = context
      const properties = schema.properties || {}

      const currentValue: any = isObject(value) ? value : {}
      
      return Object.keys(properties).map((k: string, index: number) => (
        <SchemaItem 
          schema={properties[k]} 
          uiSchema={uiSchema.properties ? uiSchema.properties[k] || {} : {}}
          rootSchema={rootSchema} 
          value={currentValue[k]} 
          key={index}
          errorSchema={errorSchema[k] || []}
          onChange={(v: any) => handleObjectFieldChange(k, v)}  
        />        
      ))
    }
  }
})