// 实现自定义format渲染
import { defineComponent, computed } from 'vue'
import {type  CustomFormat, CommonWidgetPropsDefine } from '../../lib/types'

import { withFormItem } from '../../lib/theme/default/FormItem'

// 实现选中颜色组件
const format: CustomFormat = {
  name: 'color',
  definition: {
    type: 'string',
    validate: /^#[0-9A-Fa-f]{6}$/, // 使用正则校验
  },
  component: withFormItem(
    defineComponent({
      name: 'ColorWidget',
      props: CommonWidgetPropsDefine,
      setup(props) {
        const handleChange = (e: any) => {
          const value = e.target.value
          e.target.value = props.value
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
              type="color"
              value={props.value as any}
              onInput={handleChange}
              style={styleRef.value}
            />
          )
        }
      }
    })
  )
}

export default format
