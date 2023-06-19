import {defineComponent, type PropType } from 'vue';
import { SchemaTypes, type Schema } from './types';

export default defineComponent({
  name: 'SchemaForm',
  props: {
    schema: {
      type: Object as PropType<Schema>,
      required: true
    },
    value: {
      required: true
    },
    onChange: {
      type: Function as PropType<(v: any) => void>，
      required: true
    }
  },
  setup(props, {slots, emit, attrs}) {
    const schema = props.schema
    const type = schema?.type
    
   

    return () => {
      switch(type) {
        case SchemaTypes.STRING: {
          return <input type='text' />
        }
      }

      return <div>
        this is a form
      </div>
    }
  }
})