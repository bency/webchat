<template>
  <div class="container">
    <div class="row">
      <div class="col-4 bg-info solid-height">
        線上人數：{{ onlineCount }}
      </div>
      <div class="col-8 bg-info">
        <div class="row solid-height"></div>
        <div class="row">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="哈囉" aria-label="Recipient's username"
              aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">送出</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
</template>

<script setup>
import { computed, onMounted } from 'vue';
// import HelloWorld from './components/HelloWorld.vue'
import { monitorLivingRoom, joinLivingRoom, userUid } from './components/TheHelpers.js'
import { useOnlineStore } from './pinia/useOnlineStore';

const onlineStore = useOnlineStore();

const onlineCount = computed(() => onlineStore.getOnlineCount());

onMounted(() => {
  joinLivingRoom(userUid());
  monitorLivingRoom();
});
</script>

<style>
.solid-height {
  min-height: 600px;
  overflow-y: auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
