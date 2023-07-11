import {defineComponent, type PropType, provide } from 'vue';
import { SchemaTypes, type Schema, type Theme } from './types';
import SchemaItem from './SchemaItem';
import { SchemaFormContextKey } from './context';

export default defineComponent({
  name: 'SchemaForm',
  props: {
    schema: {
      type: Object as PropType<Schema>,
      required: true
    },
    value: {
      required: true
    },
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true
    }
  },
  setup(props, {slots, emit, attrs}) {
    
    const handleChange = (v: any) => {
      props.onChange(v)
    }

    const context = {
      SchemaItem
    }
    // 使用provide将SchemaItem传到子组件，防止组件间的的循环嵌套
    provide(SchemaFormContextKey, context)

    return () => {
      const { schema, value } = props

      return <SchemaItem schema={schema} rootSchema={schema} value={value} onChange={handleChange} />
    }
  }
})