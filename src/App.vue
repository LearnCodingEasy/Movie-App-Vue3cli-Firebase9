<template>
  <div class="Wrapper-Movie-App">
    <Sidebar></Sidebar>
    <Main></Main>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Main from "@/components/Main.vue";
export default {
  name: "Movie-App",

  components: { Sidebar, Main },
};
</script>

<style lang="scss" scoped></style>
