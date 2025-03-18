import { ref } from 'vue';

const eventBus = ref({});

export const useEmitter = () => {
  const emit = (event, payload) => {
    if (eventBus.value[event]) {
      eventBus.value[event].forEach(callback => callback(payload));
    }
  };

  const on = (event, callback) => {
    if (!eventBus.value[event]) {
      eventBus.value[event] = [];
    }
    eventBus.value[event].push(callback);
  };

  return { emit, on };
};