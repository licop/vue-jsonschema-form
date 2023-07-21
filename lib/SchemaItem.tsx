import  { computed, defineComponent } from 'vue';
import { SchemaTypes, type Schema, FiledPropsDefine } from './types';
import StringFiled from './fileds/StringFiled';
import NumberFiled from './fileds/NumberFiled';
import ObjectFiled from './fileds/ObjectFiled';
import ArrayField from './fileds/ArrayFiled';

import { retrieveSchema } from './utils';
import { useVJSFContext } from './context';

export default defineComponent({
  name: 'SchemaItem',
  props: FiledPropsDefine,
  setup(props) {
    const { transformSchemaRef } = useVJSFContext()

    const retrievedSchemaRef = computed(() => {
      const { schema, rootSchema, value } = props

      return transformSchemaRef.value(retrieveSchema(schema, rootSchema, value))
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
        case SchemaTypes.ARRAY: {
          Component = ArrayField
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