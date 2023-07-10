import { defineComponent, ref, type PropType, watch } from 'vue';

export default defineComponent({
  name: 'SelectionWidget',
  props: {
    value: {},
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true
    },
    options: {
      type: Array as PropType<{
        key: string,
        value: any
      }[]>,
      required: true
    } 
  },
  setup(props) {
    const currentValueRef = ref(props.value)
    
    watch(currentValueRef, (newV) => {
      if(newV !== props.value) {
        props.onChange(newV)
      }
    })

    watch(() => props.value, (v) => {
      if(v !== currentValueRef.value) {
        currentValueRef.value = v
      }
    })

    return () => {
      const { options } = props

      return (
        <select multiple={ true } v-model={currentValueRef.value}>
          {
            options.map(op => <option value={op.value}>
              {op.key}
            </option>)
          }
        </select> 
      )
    }
  }
})