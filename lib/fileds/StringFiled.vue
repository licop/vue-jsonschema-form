<template>
  <input type="text" :value="value" @input="handleChange" />
</template>

<script lang="ts" setup>
import type { FiledProps } from '../types'

const props = defineProps<FiledProps>()

const handleChange = (e: any) => {
  props.onChange(e.target.value)
}
</script>