<template>
  <RouterView />
</template>
<script setup lang="ts">
import { RouterView } from "vue-router";
import { useTheme } from "@/utils/hooks/useTheme";
// init theme
const { initTheme } = useTheme();
initTheme();

</script>

<style scoped>

</style>
