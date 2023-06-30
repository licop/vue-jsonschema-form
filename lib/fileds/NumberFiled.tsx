import { defineComponent } from 'vue';
import { FiledPropsDefine } from '../types';

export default defineComponent({
  name: 'NumberFiled',
  props: FiledPropsDefine,
  setup() {
    return () => {
      return <div>Number Field</div>
    }
  }
})
