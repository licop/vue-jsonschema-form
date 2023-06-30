<template>
  <input type="number" :value="value" @input="handleChange" />
</template>

<script lang="ts" setup>
import type { FiledProps } from '../types'

const props = defineProps<FiledProps>()

const handleChange = (e: any) => {
  const value = e.target.value
  const num = Number(value)

  if(Number.isNaN(num)) {
    props.onChange(undefined)
  } else {
    props.onChange(num)
  }
}
</script>