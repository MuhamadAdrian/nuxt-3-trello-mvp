<template>
<div>
    <h1>Home Page</h1>
    <h2>Recently Viewed</h2>
    <h3>Workspace</h3>
    <input type="text" v-model="newWorkspaceName" @keyup.enter="createWorkspace">
    <button @click="createWorkspace">create a Workspace</button>
    <ul class="workspace-list">
        <li class="workspace-card" v-for="workspace in workspaces" :key="workspace.id">
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

    const workspaces = ref<workSpace[]>([
        { id: 123, name: 'Test' },
        { id: 234, name: 'Expremient' },
    ])

    const createWorkspace = () => {
        const randomId = Math.floor(Math.random() * 100);

        workspaces.value.push({
            id: randomId,
            name: newWorkspaceName.value
        })
    }
</script>

<style scoped>
.workspace-card {
  display: block;
  border: 2px solid #222;
  border-radius: 4px;
  padding: 2rem;
  margin-bottom: 1rem;
}
.workspace-list {
  margin-left: 0;
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
}
</style>