
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'Hello World',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup(props) {
    return () => <div>
      <h1>{props.msg}</h1>
    </div>
     
  }
})
