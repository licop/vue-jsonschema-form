// 实现组件主题配置
import { computed, defineComponent, type PropType, provide, inject, type ComputedRef, type ExtractPropTypes, shallowRef, toRaw } from 'vue';
import type { CommonWidgetDefine, FiledPropsDefine, Theme } from './types';
import { isObject } from './utils';
import { useVJSFContext } from './context';

const THEME_PROVIDER_KEY = Symbol()

const ThemeProvider = defineComponent({
  name: 'VJSFThemeProvider',
  props: {
    theme: {
      type: Object as PropType<Theme>,
      required: true
    }
  },
  setup(props, {slots}) {
    const context = computed(() => props.theme)
    
    provide(THEME_PROVIDER_KEY, context)

    return () => slots.default && slots.default()
  }
})

// 获取主题组件函数
export function getWidget(
  name: string, 
  props?: ExtractPropTypes<typeof FiledPropsDefine>
) {
  const formContext  = useVJSFContext()
  
  if(props) {
    const { uiSchema, schema } = props
    // 通过uiSchema配置组件
    if(uiSchema?.widget && isObject(uiSchema.widget)) {
      const widget = toRaw(uiSchema.widget as CommonWidgetDefine)
      return shallowRef(widget as CommonWidgetDefine)
    }
    // 通过自定义format自定义组件
    if (schema.format) {
      if (formContext.formatMapRef.value[schema.format]) {
        return shallowRef(formContext.formatMapRef.value[schema.format])
      }
    }
  }
  
  const context: ComputedRef<Theme> | undefined = inject<ComputedRef<Theme>>(THEME_PROVIDER_KEY)

  if(!context) {
    throw new Error('vjsf theme required')
  }

  const widgetRef = computed(() => {
    return context.value.widgets[name]
  })

  return widgetRef
}

export default ThemeProvider
