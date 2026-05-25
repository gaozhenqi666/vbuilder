<!--
    Copyright (c) 2024 妙码学院 @Heyi
    All rights reserved.
    让进取的人更具职业价值
-->
<script setup lang="ts">
import type { ImageBlockInfo } from '@/types/block'

const props = defineProps<{
    blockInfo: ImageBlockInfo
}>()
</script>

<template>
    <div class="image">
        <img :src="props.blockInfo.props.url" />
    </div>
</template>

<style scoped>
.image {
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
}

img {
    width: 100%;
    vertical-align: middle;
}
</style>
