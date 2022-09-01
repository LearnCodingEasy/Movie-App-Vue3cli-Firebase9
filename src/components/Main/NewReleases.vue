<template>
  <div class="">
    <HeaderPageVue></HeaderPageVue>
    <div class="content-movies">
      <div class="movie" v-for="movie in movies" :key="movie">
        <img
          :src="`${ImagPath}${movie.poster_path}`"
          :alt="`${movie.original_title}`"
          :title="`${movie.original_title}`"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderPageVue from "./HeaderPage.vue";
import axios from "axios";

export default {
  name: "NewReleases",
  data() {
    return {
      movies: [],
      ImagPath: "https://image.tmdb.org/t/p/w1280/",
      ApiUrl: `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`,
    };
  },
  created() {
    axios.get(this.ApiUrl).then((res) => {
      console.log("res data results: ", res.data.results);
      this.movies = res.data.results;
      console.log("this.movies: ", this.movies);
    });
  },
  computed() {},

  components: { HeaderPageVue },
};
</script>

<style lang="scss" scoped></style>
