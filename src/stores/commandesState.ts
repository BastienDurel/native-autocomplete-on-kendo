const LOCAL_STORAGE_KEY = 'states_commandes'

import { defineStore } from 'pinia'
import { useLocalStorage } from "@vueuse/core"

const default_: GridStateStore = { sortable: true, reorderable: true, resizable: true, skip: 0, take: 10, total: 0, columns: undefined, filters: {} };

export const gridStateStore = defineStore('states_commandes', {
  state: () => {
    return useLocalStorage(LOCAL_STORAGE_KEY, default_);
  },
  actions: {
    clear() {
      this.filters = {
        database: []
      };
      console.log('cleared');
    },
  },
})

export default gridStateStore;