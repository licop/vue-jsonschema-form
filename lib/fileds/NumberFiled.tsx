import { FiledPropsDefine } from '../types'
import { defineComponent } from 'vue'

import { getWidget } from '../theme'

export default defineComponent({
  name: 'NumberFeild',
  props: FiledPropsDefine,
  setup(props) {
    const handleChange = (v: string) => {
      const num = Number(v)

      if (Number.isNaN(num)) {
        props.onChange(undefined)
      } else {
        props.onChange(num)
      }
    }

    const NumberWidgetRef = getWidget('NumberWidget')

    return () => {
      const NumberWidget = NumberWidgetRef.value
      const { rootSchema, ...rest } = props
      return (
        <NumberWidget
          {...rest}
          onChange={handleChange}
        />
      )
    }
  },
})
