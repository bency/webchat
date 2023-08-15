import { ref } from 'vue';

export const useOnlineStore = defineStore('online', () => {
    const onlineCount = ref(0);

    const setOnlineCount = (number) => onlineCount.value = number;
    const getOnlineCount = () => onlineCount.value;

    return {
        setOnlineCount,
        getOnlineCount,
    }
});
