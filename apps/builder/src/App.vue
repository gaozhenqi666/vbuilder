
<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';

onMounted(() => {
    myUndefinedFunction()
})
</script>

<template>
    <RouterView />
</template>
