
<script setup lang="ts">
import { Plus } from '@icon-park/vue-next';

import ActionList from './ActionList.vue';
</script>

<template>
    <div class="actions-left-panel-wrapper">
        <div class="drawer-header">
            <h3 class="drawer-title">ACTIONS</h3>
            <button class="drawer-component-adder">
                <Plus size="18" />
            </button>
        </div>
        <div class="drawer-content">
            <ActionList />
        </div>
    </div>
</template>

<style scoped>
.actions-left-panel-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    z-index: 4;
    width: 320px;
    height: 100%;
    border-right: 1px solid var(--color-gray-200);
}

.drawer-header {
    display: flex;
    position: sticky;
    justify-content: space-between;
    align-items: center;
    top: 0;
    font-weight: var(--font-weight-bolder);
    padding: 12px 10px 12px 20px;
    background-color: var(--color-white);
}

.drawer-content {
    padding: 0 10px;
}

.drawer-component-adder {
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 8px;
    margin-left: 10px;
    background-color: var(--color-gray-300);
    color: var(--color-black);
    cursor: pointer;
    box-shadow:
        rgba(62, 65, 86, 0.25) 0px 0px 1px,
        rgba(62, 65, 86, 0.1) 0px 4px 8px;
}

.sub-panel-drawer {
    width: 300px;
    height: 100%;
    box-shadow: var(--color-gray-300) 1px 0 0;
    overflow: hidden;
}

/* 下面我们会解释这些 class 是做什么的 */
.sub-panel-drawer-enter-active,
.sub-panel-drawer-leave-active {
    transition: width 0.1s cubic-bezier(0.3, 0.1, 0.3, 1);
}

.sub-panel-drawer-enter-from,
.sub-panel-drawer-leave-to {
    width: 0;
}

.sub-panel-drawer-content {
    width: 300px;
    height: 100%;
    padding: 16px 16px 16px 20px;
    background-color: rgb(250, 250, 251);
    box-shadow: rgba(128, 128, 128, 0.12) 1px 0px 0px;
}
</style>
