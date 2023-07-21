import { computed, defineComponent } from 'vue'

import { FiledPropsDefine } from '../types'
import { getWidget } from '../theme'

export default defineComponent({
  name: 'StringFeild',
  props: FiledPropsDefine,
  setup(props) {
    const handleChange = (v: string) => {
      props.onChange(v)
    }

    const TextWidgetRef = computed(() => {
      const widgetRef = getWidget('TextWidget', props)
      return widgetRef.value
    })
    
    const widgetOptionRef = computed(() => {
      const { widget, properties, items, ...rest } = props.uiSchema

      return rest
    })

    return () => {
      const { rootSchema, errorSchema, ...rest } = props
      const TextWidget = TextWidgetRef.value

      return (
        <TextWidget
          {...rest}
          errors={errorSchema.__errors}
          onChange={handleChange}
          options={widgetOptionRef.value}
        />
      )
    }
  }
})
