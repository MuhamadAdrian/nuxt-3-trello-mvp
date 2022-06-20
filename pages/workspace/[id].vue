<template>
    <div>
        <NuxtLink to="/">Home</NuxtLink>
        <h1>Workspace # {{ filteredWorkspaces.name }}</h1>
    </div>
</template>

<script setup lang="ts">
const workspaces = useWorkspaces();
const route = useRoute();

const filteredWorkspaces = workspaces.value.find(workspace => workspace.id === route.params.id);

console.log(filteredWorkspaces);

</script>