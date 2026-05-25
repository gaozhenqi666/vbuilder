<!--
    Copyright (c) 2024 妙码学院 @Heyi
    All rights reserved.
    让进取的人更具职业价值
-->
<script setup lang="ts">
import ChartRenderer from '@/components/ChartRenderer/ChartRenderer.vue'
import type { ChartBlockInfo } from '@/types/block'

defineProps<{
    blockInfo: ChartBlockInfo
}>()
</script>

<template>
    <div class="chart">
        <ChartRenderer :blockInfo="blockInfo" />
    </div>
</template>

<style scoped>
.chart {
    width: 100%;
}
</style>
