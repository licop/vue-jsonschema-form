import { computed, defineComponent, provide, ref, shallowRef, watch, watchEffect } from 'vue';
import type { PropType, Ref } from 'vue';
import Ajv from 'ajv'
import type { Options } from 'ajv'

import type { Schema, UISchema, CustomFormat, CommonWidgetDefine, CustomKeyword } from './types';
import SchemaItem from './SchemaItem';
import { SchemaFormContextKey } from './context';
import { validateFormData, type ErrorSchema } from './validator'

interface ContextRef {
  doValidate: () => Promise<{
    errors: any[],
    valid: boolean
  }>
}

const defaultAjvOptions: Options = {
  allErrors: true
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
    },
    uiSchema: {
      type: Object as PropType<UISchema>
    },
    customFormat: {
      type: [Object, Array] as PropType<CustomFormat | CustomFormat[]>
    },
    customKeyword: {
      type: [Object, Array] as PropType<CustomKeyword | CustomKeyword[]>

    }
  },
  setup(props, {slots, emit, attrs}) {
    
    const handleChange = (v: any) => {
      props.onChange(v)
    }

    const errorSchemaRef: Ref<ErrorSchema> = shallowRef({})
    const validatorRef: Ref<Ajv.Ajv> = shallowRef() as any
    
    watchEffect(() => {
      validatorRef.value = new Ajv({
        ...defaultAjvOptions,
        ...props.ajvOptions
      })

      if(props.customFormat) {
        const customFormats = Array.isArray(props.customFormat) ? props.customFormat : [props.customFormat]
        customFormats.forEach(format => {
          validatorRef.value.addFormat(format.name, format.definition)
        })
      }

      if(props.customKeyword) {
        const customKeywords = Array.isArray(props.customKeyword) ? props.customKeyword : [props.customKeyword]
        customKeywords.forEach(keyword => {
          validatorRef.value.addKeyword(keyword.name, keyword.definition)
        })
      }
    })
    
    const validateResolveRef = ref()
    const validateIndex = ref(0)

    watch(() => props.value, () => {
      if(validateResolveRef.value) {
        doValidate()
      }
    }, { deep: true })

    async function doValidate() {
      console.log('start validate -------->')
      const index = (validateIndex.value += 1)
      
      const result = await validateFormData(
        validatorRef.value,
        props.value,
        props.schema,
        props.locale,
        props.customValidate,
      )

      if (index !== validateIndex.value) return
      console.log('end validate -------->')

      errorSchemaRef.value = result.errorSchema

      validateResolveRef.value(result)
      validateResolveRef.value = undefined
    }

    watch(() => props.contextRef, () => {
      if(props.contextRef) {
        props.contextRef.value = {
          doValidate() {    
            return new Promise((resolve) => {
              validateResolveRef.value = resolve
              doValidate()
            })
            
            
          }
        }
      }
    }, {
      immediate: true
    })
    
    const formatMapRef = computed(() => {
      if(props.customFormat) {
        const customFormats = Array.isArray(props.customFormat) ? props.customFormat : [props.customFormat]
        return customFormats.reduce((result, format) => {
          result[format.name] = format.component
          return result
        }, {} as {[key:string]: CommonWidgetDefine })
      } else {
        return {}
      }
    })

    const transformSchemaRef = computed(() => {
      if (props.customKeyword) {
        const customKeywords = Array.isArray(props.customKeyword)
          ? props.customKeyword
          : [props.customKeyword]

        return (schema: Schema) => {
          let newSchema = schema
          customKeywords.forEach((keyword) => {
            if ((newSchema as any)[keyword.name]) {
              newSchema = keyword.transformSchema(schema)
            }
          })
          return newSchema
        }
      }
      return (s: Schema) => s
    })


    const context = {
      SchemaItem,
      formatMapRef,
      transformSchemaRef
    }

    // 使用provide将SchemaItem传到子组件，防止组件间的的循环嵌套
    provide(SchemaFormContextKey, context)

    return () => {
      const { schema, value, uiSchema } = props
      
      return <SchemaItem 
        schema={schema}
        uiSchema={uiSchema || {}} 
        rootSchema={schema} 
        value={value} 
        onChange={handleChange}
        errorSchema = {errorSchemaRef.value || {}} 
      />
    }
  }
})