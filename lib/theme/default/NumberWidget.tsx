import { CommonWidgetPropsDefine } from '../../types'
import { defineComponent } from 'vue'
import { withFormItem } from './FormItem'

const NumberWidget = withFormItem(defineComponent({
  name: 'NumberWidget',
  props: CommonWidgetPropsDefine,
  setup(props) {

    const handleChange = (e: any) => {
      const value = e.target.value
      // e.target.value = props.value
      props.onChange(value)
    }

    // const styleRef = computed(() => {
    //   return {
    //     color: (props.options && props.options.color) || 'black',
    //   }
    // })
    
    return () => {
      return (
        <input
          type="number"
          value={props.value as any}
          onInput={handleChange}
          // style={styleRef.value}
        />
      )
    }
  }
}))

export default NumberWidget
