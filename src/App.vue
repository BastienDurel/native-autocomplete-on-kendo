<script setup lang="ts">
import { Button } from "@progress/kendo-vue-buttons";
import HelloWorld from './components/HelloWorld.vue';
import DropDowns from './components/DropDowns.vue';
function getCode() {
  const n = document.createElement("a");
  n.setAttribute("download", "code.zip"),
    n.href = "./code.zip",
    document.body.appendChild(n),
    n.click(),
    n.remove()
}
</script>

<template>
  <Button @click="getCode">Get Code</Button>
  <div>
    <HelloWorld v-if="false" title="empty initial value" :store="state" />
    <DropDowns />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
