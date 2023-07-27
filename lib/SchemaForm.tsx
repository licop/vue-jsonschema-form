import { computed, defineComponent, provide, ref, shallowRef, watch, watchEffect } from 'vue';
import type { PropType, Ref } from 'vue';
import Ajv from 'ajv'
import type { Options } from 'ajv'

import type { Schema, UISchema, CustomFormat, CommonWidgetDefine, CustomKeyword } from './types';
import SchemaItem from './SchemaItem';
import { SchemaFormContextKey } from './context';
import { validateFormData, type ErrorSchema } from './validator'
import { createUseStyles } from 'vue-jss';

interface ContextRef {
  doValidate: () => Promise<{
    errors: any[],
    valid: boolean
  }>
}

const defaultAjvOptions: Options = {
  allErrors: true
}

const useStyles = createUseStyles({
  container: {},
  desc: {
    color: '#555',
    margin: '5px 0px'
  }
})

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
    // Ajv的配置选项
    ajvOptions: {
      type: Object as PropType<Options>
    },
    locale: {
      type: String, 
      defalut: 'zh'
    },
    // 自定义校验
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
  setup(props) {
    const classesRef = useStyles() 

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

      // 自定义format校验
      if(props.customFormat) {
        const customFormats = Array.isArray(props.customFormat) ? props.customFormat : [props.customFormat]
        customFormats.forEach(format => {
          validatorRef.value.addFormat(format.name, format.definition)
        })
      }

      // 自定义keyword校验
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
    
    // 自定义fotmat组件Map
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
    
    // 自定义keyword转换schema
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
      const classes = classesRef.value
      return <div class={classes.container}>
        <h4 class={classes.desc}>
          {props.schema.description}
        </h4>
        <SchemaItem 
          schema={schema}
          uiSchema={uiSchema || {}} 
          rootSchema={schema} 
          value={value} 
          onChange={handleChange}
          errorSchema = {errorSchemaRef.value || {}} 
        />
      </div>
    }
  }
})