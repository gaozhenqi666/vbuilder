
<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';

import ActionsLeftPanel from '@/components/ActionsLeftPanel/ActionsLeftPanel.vue';

const route = useRoute()
</script>

<template>
    <div class="actions-wrapper">
        <ActionsLeftPanel />

        <RouterView v-if="route.params.id" />

        <div v-else class="actions-empty">
            <img
                class="actions-empty-img"
                src="https://go.glideapps.com/images/bolts.png"
                alt="empty"
            />
            <div class="actions-empty-description">Select an action to view or edit</div>
        </div>
    </div>
</template>

<style scoped>
.actions-wrapper {
    display: flex;
    height: 100%;
}

.actions-empty {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 24px;
    background-color: var(--color-gray-100);
}

.actions-empty-img {
    position: absolute;
    width: 678px;
    opacity: 0.34;
}

.actions-empty-description {
    z-index: 1;
    max-width: 960px;
    height: 100%;
    padding-top: 72px;
    color: var(--color-black);
    font-weight: 600;
}
</style>
