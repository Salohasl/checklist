<script setup>

import Header from "../components/Header.vue";
</script>

<template>
  <Header />
  <button class="checklist__add">
    <span></span>
    <span></span>
  </button>
</template>

<style scoped>
  .checklist__add {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 11px 50px black;

    span {
      position: absolute;
      width: 40px;
      height: 4px;
      background: #ffffff;
      transform: rotate(90deg);
      border-radius: 5px;

      &:nth-of-type(1) {
        transform: rotate(180deg);
      }
    }
  }
</style>