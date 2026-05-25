
<script setup lang="ts">
import { DataSheet } from '@icon-park/vue-next'
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const dataSourceList = ref([
    {
        id: '1',
        type: 'sync',
        title: 'Users 100w Rows'
    },
    {
        id: '2',
        type: 'basic',
        title: 'Orders 10w Rows'
    },

    {
        id: '3',
        type: 'basic',
        title: 'Foods 10 Rows'
    },

])

const route = useRoute()
</script>

<template>
    <ul class="dataSource-list">
        <RouterLink
            is="li"
            :to="`/app/dataSource/${dataSource.id}`"
            :class="['dataSource-item', { active: route.params.id === dataSource.id }]"
            v-for="dataSource in dataSourceList"
            :key="dataSource.id"
        >
            <DataSheet />
            <span class="dataSource-item-title">
                {{ dataSource.title }}
            </span>
        </RouterLink>
    </ul>
</template>

<style scoped>
.dataSource-item {
    display: flex;
    align-items: center;
    padding: 6px 10px;
    margin-bottom: 4px;
    color: var(--color-text);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;

    &.active {
        background-color: var(--color-gray-100);
    }

    &:hover {
        background-color: var(--color-gray-100);
        transition: all 0.3s ease;
    }
}

.dataSource-item-icon {
    color: var(--color-gray-800);
}

.dataSource-item-title {
    margin-left: 8px;
    font-size: var(--font-size-normal);
    color: var(--color-gray-900);
}
</style>
