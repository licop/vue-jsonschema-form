import { inject } from 'vue'
import type { CommonFiledType, Theme } from './types'

export const SchemaFormContextKey = Symbol()

export function useVJSFContext() {
  const context: { SchemaItem: CommonFiledType, theme: Theme } | undefined = inject(SchemaFormContextKey)
  
  if(!context) {
    throw Error('SchemaForm should be used')
  }

  return context
}
