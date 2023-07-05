import { inject } from 'vue'
import type { CommonFiledType } from './types'


export const SchemaFormContextKey = Symbol()

export function useVJSFContext() {
  const context: { SchemaItem: CommonFiledType } | undefined = inject(SchemaFormContextKey)
  
  if(!context) {
    throw Error('SchemaForm should be used')
  }

  return context
}
