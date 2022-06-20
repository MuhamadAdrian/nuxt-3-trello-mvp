<template>
<div>
    <h1>Home Page</h1>
    <h2>Recently Viewed</h2>
    <h3>Workspace</h3>
    <input type="text" v-model="newWorkspaceName" @keyup.enter="createWorkspace">
    <button @click="createWorkspace">create a Workspace</button>
    <WorkspaceList />
</div>
</template>

<script setup lang="ts">
    const newWorkspaceName = ref<string>('');

    const workspaces = useWorkspaces();

    const createWorkspace = () => {
        const randomId = Math.floor(Math.random() * 100).toString();

        workspaces.value.push({
            id: randomId,
            name: newWorkspaceName.value
        })

        newWorkspaceName.value = ''
    }
</script>