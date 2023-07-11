import SelectionWidget from './SelectionWidget'
import TextWidget from './TextWidget'
import NumberWidget from './NumberWidget'
import { CommonWidgetPropsDefine } from '../../types'
import { defineComponent } from 'vue'


const CommonWidget = defineComponent({
  props: CommonWidgetPropsDefine,
  setup() {
    return () => null
  }
})

export default {
  widgets: {
    SelectionWidget,
    TextWidget,
    NumberWidget
  }
}
