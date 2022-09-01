<template>
  <div class="Main">
    <NewReleasesVue></NewReleasesVue>
  </div>
</template>

<script>
import NewReleasesVue from "./Main/NewReleases.vue";
export default {
  name: "Main",

  components: { NewReleasesVue },
};
</script>

<style lang="scss" scoped></style>
