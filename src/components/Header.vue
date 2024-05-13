<template>
  <v-app-bar color="red" density="compact">
    <template #prepend>
      <h2>Marvel heroes</h2>
    </template>

    <template #append>
      <v-btn @click="$router.push('/about')"> About </v-btn>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup></script>
