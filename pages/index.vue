<template>
<div>
    <h1>Home Page</h1>
    <h2>Recently Viewed</h2>
    <h3>Workspace</h3>
    <input type="text" v-model="newWorkspaceName">
    <button @click="createWorkspace">create a Workspace</button>
    <ul>
        <li v-for="workspace in workspaces" :key="workspace.id">
            {{ workspace.name }}
        </li>
    </ul>
</div>
</template>

<script setup lang="ts">
    interface workSpace {
        id: number,
        name: string
    }
    definePageMeta({
        layout: 'main-layout'
    })

    const newWorkspaceName = ref<string>('');

    const workspaces = ref<workSpace[]>([])

    const createWorkspace = () => {
        const randomId = Math.floor(Math.random() * 100);

        workspaces.value.push({
            id: randomId,
            name: newWorkspaceName.value
        })
    }
</script>

<style scoped>

</style>