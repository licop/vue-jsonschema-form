import  { defineComponent } from 'vue';

import type { PropType } from 'vue';
import { SchemaTypes, type Schema, FiledPropsDefine } from './types';
import StringFiled from './fileds/StringFiled.vue';
import NumberFiled from './fileds/NumberFiled';


export default defineComponent({
  name: 'SchemaItem',
  props: FiledPropsDefine,
  setup(props) {
    
    return () => {
      const { schema } = props
      const type = schema.type
      
      let Component: any 

      switch(type) {
        case SchemaTypes.STRING: {
          Component = StringFiled
          break
        }
        case SchemaTypes.NUMBER: {
          Component = NumberFiled
          break
        }
        default: {
          console.warn(`${type} is not supported`)
        }
      }

      return <Component {...props} />
    }
  }

})