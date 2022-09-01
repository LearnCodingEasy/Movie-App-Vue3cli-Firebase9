<template>
  <div class="header">
    <div class="search">
      <div class="icon">
        <fa :icon="['fas', 'search']"></fa>
      </div>
      <input type="text" placeholder="Films, Tv, Actors, Directors Genes" />
    </div>
    <div class="title-page">
      <h3>Title Page</h3>
    </div>
    <div class="chang-page-display">
      <h2>icon</h2>
    </div>
  </div>
</template>

<script>
export default { name: "HeaderPage" };
</script>

<style lang="scss" scoped></style>
