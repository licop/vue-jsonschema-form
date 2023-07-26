import { CommonWidgetPropsDefine } from '../../lib/types'
import { computed, defineComponent } from 'vue'
import  { withFormItem } from '../../lib/theme/default/FormItem'

const PasswordWidget = withFormItem(
  defineComponent({
    name: 'PasswordWidget',
    props: CommonWidgetPropsDefine,
    setup(props) {
      const handleChange = (e: any) => {
        const value = e.target.value
        props.onChange(value)
      }
      
      const styleRef = computed(() => {
        return {
          color: (props.options && props.options.color) || 'black',
        }
      })
      
      return () => {
        return (
            <input
              type="password"
              value={props.value as any}
              onInput={handleChange}
              style={styleRef.value}
            />          
        )
      }
    }
  })
)

export default PasswordWidget
