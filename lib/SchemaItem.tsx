import  { computed, defineComponent } from 'vue';
import { SchemaTypes, type Schema, FiledPropsDefine } from './types';
import StringFiled from './fileds/StringFiled.vue';
import NumberFiled from './fileds/NumberFiled.vue';
import ObjectFiled from './fileds/ObjectFiled';

import { retrieveSchema } from './utils';


export default defineComponent({
  name: 'SchemaItem',
  props: FiledPropsDefine,
  setup(props) {
    
    const retrievedSchemaRef = computed(() => {
      const { schema, rootSchema, value } = props

      return retrieveSchema(schema, rootSchema, value)
    })


    return () => {
      const { schema } = props
      const type = schema.type
      const retrievedSchema = retrievedSchemaRef.value
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
        case SchemaTypes.OBJECT: {
          Component = ObjectFiled
          break
        }
        default: {
          console.warn(`${type} is not supported`)
        }
      }

      return <Component {...props} schema={retrievedSchema} />
    }
  }

})