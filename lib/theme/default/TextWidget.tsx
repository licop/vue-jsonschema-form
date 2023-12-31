import { CommonWidgetPropsDefine } from '../../types'
import { computed, defineComponent } from 'vue'
import  { withFormItem } from './FormItem'

const TextWidget = withFormItem(
  defineComponent({
    name: 'TextWidget',
    props: CommonWidgetPropsDefine,
    setup(props) {
      const handleChange = (e: any) => {
        const value = e.target.value
        props.onChange(value)
      }
      // 使用uiSchema改变组件样式
      const styleRef = computed(() => {
        return {
          color: (props.options && props.options.color) || 'black',
        }
      })
      
      return () => {
        return (
            <input
              type="text"
              value={props.value as any}
              onInput={handleChange}
              style={styleRef.value}
            />          
        )
      }
    }
  })
)

export default TextWidget
