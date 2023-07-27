import { inject } from 'vue'
import type { Ref } from 'vue'
import type { CommonFiledType, CommonWidgetDefine, Schema } from './types'

export const SchemaFormContextKey = Symbol()

export function useVJSFContext() {
  const context: { 
    SchemaItem: CommonFiledType
    formatMapRef: Ref<{[key: string]: CommonWidgetDefine}> 
    transformSchemaRef: Ref<(schema: Schema) => Schema>
  } | undefined = inject(SchemaFormContextKey)
  
  if(!context) {
    throw Error('SchemaForm should be used')
  }
   
  return context
}
