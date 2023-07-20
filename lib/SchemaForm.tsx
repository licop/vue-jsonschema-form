import { defineComponent, provide, shallowRef, watch, watchEffect } from 'vue';
import type { PropType, Ref } from 'vue';
import Ajv from 'ajv'
import type { Options } from 'ajv'

import { SchemaTypes, type Schema, type Theme } from './types';
import SchemaItem from './SchemaItem';
import { SchemaFormContextKey } from './context';
import { validateFormData, type ErrorSchema } from './validator'

interface ContextRef {
  doValidate: () => {
    errors: any[],
    valid: boolean
  }
}

const defaultAjvOptions: Options = {
  allErrors: true,
  // jsonPointers: true
}

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
    },
    contextRef: {
      type: Object as PropType<Ref<ContextRef | undefined>>
    },
    ajvOptions: {
      type: Object as PropType<Options>
    },
    locale: {
      type: String, 
      defalut: 'zh'
    },
    customValidate: {
      type: Function as PropType<(data: any, errors: any) => void>
    }
  },
  setup(props, {slots, emit, attrs}) {
    
    const handleChange = (v: any) => {
      props.onChange(v)
    }

    const context = {
      SchemaItem
    }
    
    const errorSchemaRef: Ref<ErrorSchema> = shallowRef({})
    const validatorRef: Ref<Ajv.Ajv> = shallowRef() as any
    
    watchEffect(() => {
      validatorRef.value = new Ajv({
        ...defaultAjvOptions,
        ...props.ajvOptions
      })
    })

    watch(() => props.contextRef, () => {
      if(props.contextRef) {
        props.contextRef.value = {
          doValidate() {
            console.log('-------->')
            const result = validateFormData(
              validatorRef.value, 
              props.value, 
              props.schema, 
              props.locale,
              props.customValidate
            )
            errorSchemaRef.value = result.errorSchema
            console.log(errorSchemaRef.value, 'schemaform')
            return result
          }
        }
      }
    }, {
      immediate: true
    })

    // 使用provide将SchemaItem传到子组件，防止组件间的的循环嵌套
    provide(SchemaFormContextKey, context)

    return () => {
      const { schema, value } = props
      
      return <SchemaItem 
        schema={schema} 
        rootSchema={schema} 
        value={value} 
        onChange={handleChange}
        errorSchema = {errorSchemaRef.value || {}} 
      />
    }
  }
})