
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import DataSourceContent from '@/components/DataSourceContent/DataSourceContent.vue'

const route = useRoute()

const dsId = computed(() => route.params.id as string)
</script>

<template>
    <DataSourceContent :id="dsId" />
</template>

<style scoped></style>
