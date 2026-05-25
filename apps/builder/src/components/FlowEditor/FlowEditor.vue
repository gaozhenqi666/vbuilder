<script setup lang="ts">
import '@vue-flow/core/dist/style.css'
import '@vue-flow/core/dist/theme-default.css'

import { Log, Resting, Shuffle } from '@icon-park/vue-next'
import { Background, Controls, MiniMap } from '@vue-flow/additional-components'
import { Panel, useVueFlow, VueFlow } from '@vue-flow/core'
import { ref } from 'vue'

import { initialEdges, initialNodes } from './initial-elements.js'
import OperatorNode from './Nodes/OperatorNode.vue'
import ResultNode from './Nodes/ResultNode.vue'
import ValueNode from './Nodes/ValueNode.vue'

const nodes = ref(initialNodes)

const edges = ref(initialEdges)

/**
 * useVueFlow provides all event handlers and store properties
 * You can pass the composable an object that has the same properties as the VueFlow component props
 */
const { onNodeDragStop, onConnect, addEdges, setTransform, toObject } = useVueFlow()

/**
 * This is a Vue Flow event-hook which can be listened to from anywhere you call the composable, instead of only on the main component
 *
 * onPaneReady is called when view pane & nodes have visible dimensions
 */
// onPaneReady(({ fitView }) => {})

// eslint-disable-next-line no-console
onNodeDragStop((e) => console.log('drag stop', e))

/**
 * onConnect is called when a new connection is created.
 * You can add additional properties to your new edge (like a type or label) or block the creation altogether
 */
onConnect((params) => addEdges(params))

/**
 * To update node properties you can simply use your elements v-model and mutate the elements directly
 * Changes should always be reflected on the graph reactively, without the need to overwrite the elements
 */
function updatePos() {
    return nodes.value.forEach((el) => {
        el.position = {
            x: Math.random() * 400,
            y: Math.random() * 400
        }
    })
}

/**
 * toObject transforms your current graph data to an easily persist-able object
 */
function logToObject() {
    // eslint-disable-next-line no-console
    return console.log(toObject())
}

/**
 * Resets the current view pane transformation (zoom & pan)
 */
function resetTransform() {
    return setTransform({ x: 0, y: 0, zoom: 1 })
}
</script>

<template>
    <VueFlow
        class="basic-flow"
        :nodes="nodes"
        :edges="edges"
        :default-viewport="{ zoom: 1, x: 300, y: 300 }"
        :min-zoom="0.2"
        :max-zoom="4"
    >
        <template #node-value="props">
            <ValueNode :id="props.id" :data="props.data" />
        </template>

        <template #node-operator="props">
            <OperatorNode :id="props.id" :data="props.data" />
        </template>

        <template #node-result="props">
            <ResultNode :id="props.id" />
        </template>

        <Background :gap="12" />

        <MiniMap />

        <Controls />

        <Panel position="top-right" class="controls">
            <div class="control-btn" title="Reset Transform" @click="resetTransform">
                <Resting />
            </div>

            <div class="control-btn" title="Shuffle Node Positions" @click="updatePos">
                <Shuffle />
            </div>

            <div class="control-btn" title="Log `toObject`" @click="logToObject">
                <Log />
            </div>
        </Panel>
    </VueFlow>
</template>

<style scoped>
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/core@1.39.0/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/core@1.39.0/dist/theme-default.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/controls@latest/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/minimap@latest/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/node-resizer@latest/dist/style.css';

.controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 4px 8px;
    border-radius: 8px;
    background-color: var(--color-gray-100);
    border: 1px solid var(--color-gray-300);
    box-shadow: rgb(0 0 0 / 10%) 1px 2px 20px;
}

.control-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    color: var(--color-gray-800);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.control-btn:hover {
    background-color: var(--color-gray-300);
    transition: all 0.2s ease-in-out;
}
</style>

<style global>
.vue-flow__minimap {
    transform: scale(75%);
    transform-origin: bottom right;
}

.math-flow {
    background-color: #edf2f7;
    height: 100%;
    width: 100%;
}

.vue-flow__handle {
    height: 24px;
    width: 10px;
    background: #aaa;
    border-radius: 4px;
}

.vue-flow__edges path {
    stroke-width: 3;
}

.vue-flow__node {
    background-color: #f3f4f6;
}

.vue-flow__node-value {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 8px;
    box-shadow: 0 0 10px #0003;
}

.vue-flow__node-value.selected {
    box-shadow: 0 0 0 2px #ec4899;
}

.vue-flow__node-value input {
    flex: 1;
    padding: 8px;
    border: none;
    border-radius: 8px;
    box-shadow: 0 0 10px #0000001a;
}

.vue-flow__node-value input:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ec4899;
    transition: box-shadow 0.2s;
}

.vue-flow__node-value .vue-flow__handle {
    background-color: #ec4899;
}

.vue-flow__node-operator {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: 0 0 10px #0003;
}

.vue-flow__node-operator.selected {
    box-shadow: 0 0 0 2px #2563eb;
}

.vue-flow__node-operator .buttons {
    display: flex;
    gap: 8px;
}

.vue-flow__node-operator button {
    border: none;
    cursor: pointer;
    background-color: #4a5568;
    border-radius: 8px;
    color: #fff;
    box-shadow: 0 0 10px #0000004d;
    width: 40px;
    height: 40px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.vue-flow__node-operator button svg {
    width: 100%;
    height: 100%;
}

.vue-flow__node-operator button:hover {
    background-color: #2563eb;
    transition: background-color 0.2s;
}

.vue-flow__node-operator button.selected {
    background-color: #2563eb;
}

.vue-flow__node-operator .vue-flow__handle[data-handleid='target-a'] {
    top: 25%;
}

.vue-flow__node-operator .vue-flow__handle[data-handleid='target-b'] {
    top: 75%;
}

.vue-flow__node-operator .vue-flow__handle {
    background-color: #2563eb;
}

.vue-flow__node-result {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: 0 0 10px #0003;
}

.vue-flow__node-result.selected {
    box-shadow: 0 0 0 2px #5ec697;
}

.vue-flow__node-result .result {
    display: flex;
    gap: 8px;
    font-size: 24px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type='number'] {
    -moz-appearance: textfield;
}
</style>
