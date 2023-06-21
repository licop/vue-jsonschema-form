<template>
  <input type="text" :value="value" @input="handleChange" />
</template>

<script lang="ts" setup>
import type { FileProps } from '../types'

const props = defineProps<FileProps>()

const handleChange = (e: any) => {
  props.onChange(e.target.value)
}
</script>