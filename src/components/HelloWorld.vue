<script setup lang="ts">
import {
  MultiSelect,
  MultiSelectChangeEvent,
} from '@progress/kendo-vue-dropdowns';

const props = defineProps<{
  title: string;
  store: GridStateStore;
}>();

const databases: idValue[] = [
  { id: 'OPT', text: 'Foo: optimal' },
  { id: 'RM', text: 'Bar: ring' },
];

function onChangeDatabase(event: MultiSelectChangeEvent) {
  props.store.filters.database = [...event.target.value];
}
</script>

<template>
  Database for {{ title }}:
  <MultiSelect
    :data-items="databases"
    :value="store.filters?.database"
    :placeholder="'Société'"
    :filterable="false"
    name="database"
    :text-field="'text'"
    :data-item-key="'id'"
    :value-field="'id'"
    :value-primitive="true"
    @change="onChangeDatabase"
  >
  </MultiSelect>
  <div class="read-the-docs">
    Selected:
    <pre>{{ store.filters?.database }}</pre>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
