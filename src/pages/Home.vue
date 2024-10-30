<script setup>
import Header from "../components/Header.vue";
import Authorization from "../components/form-components/Authorization.vue";
import {ref} from "vue";

const hiddenForm = ref(false);

function toggleForm() {
  hiddenForm.value = !hiddenForm.value;
}
</script>

<template>
  <Header
    :toggleForm="toggleForm"
  />
  <section>
    <div class="intro">
      <div class="intro-title">
        <h1>Мои заметки</h1>
        <h3>Не забывай о важном, храни его в облаке.</h3>
      </div>
      <picture>
        <img src="/images/intro.png" alt="intro" />
      </picture>
    </div>
  </section>
  <Authorization
      v-show="hiddenForm"
  />
</template>

<style scoped>
  .intro {
    max-width: 1724px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;

    picture {
      width: 60%;
      height: 60%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .intro-title {
    h1 {
      font-size: 6.5rem;
      font-weight: 900;
      color: #FFFFFF;
      line-height: 6.5rem;
    }

    h3 {
      color: #9DA5AF;
      font-size: 2rem;
      width: 60%;
      margin-top: 40px;
    }
  }
</style>