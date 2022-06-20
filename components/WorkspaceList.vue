<template>
    <ul class="workspace-list">
        <li class="workspace-card" v-for="workspace in workspaces" :key="workspace.id">
            <NuxtLink :to="`/workspace/${workspace.id}`">{{ workspace.name }}</NuxtLink>
        </li>
    </ul>
</template>

<script setup lang="ts">
    const workspaces = useWorkspaces();
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

