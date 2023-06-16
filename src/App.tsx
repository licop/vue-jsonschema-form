import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld'

export default defineComponent({
  name: 'App',
  setup() {
    return () => <div>
      <HelloWorld msg='hello world' />
    </div>
  }
})