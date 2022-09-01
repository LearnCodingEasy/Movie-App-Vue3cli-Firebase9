<template>
  <div class="Sidebar">
    <div class="wrapper-user" v-if="isLogin">
      <div class="wrapper-user-head">
        <div class="img">
          <img :src="user.photoURL" alt="" />
          <button class="signOut" @click="signOut">signOut</button>
        </div>
        <div class="data">
          <h4>{{ user.displayName }}</h4>
          <p>
            <span class="icon">
              <fa :icon="['fas', 'circle']"></fa>
            </span>
            <span class="status">online</span>
          </p>
        </div>
      </div>
    </div>
    <button v-else @click="signIn">signIn</button>
    <div class="wrapper-main">
      <h4 class="title">Main</h4>
      <ul>
        <li>
          <span class="icon">
            <fa :icon="['far', 'star']"></fa>
          </span>
          <span class="text">Favorites</span>
        </li>
        <li>
          <span class="icon">
            <fa :icon="['fas', 'fire']"></fa>
          </span>
          <span class="text">New Releases</span>
        </li>
        <li>
          <span class="icon">
            <fa :icon="['far', 'clock']"></fa>
          </span>
          <span class="text">Watch Later</span>
        </li>
        <li>
          <span class="icon">
            <fa :icon="['fas', 'person-walking-dashed-line-arrow-right']"></fa>
          </span>
          <span class="text">Coming Soon</span>
        </li>
        <li>
          <span class="icon">
            <fa :icon="['far', 'message']"></fa>
          </span>
          <span class="text">Recommended</span>
        </li>
      </ul>
    </div>
    <div class="wrapper-Collections">
      <h4 class="title">Collections</h4>
      <ul>
        <li>
          <span class="icon">
            <fa :icon="['far', 'file']"></fa>
          </span>
          <span class="text">Fell Good</span>
        </li>
        <li>
          <span class="icon">
            <fa :icon="['far', 'file']"></fa>
          </span>
          <span class="text">Oscar Films</span>
        </li>
        <li>
          <span class="icon">
            <fa :icon="['far', 'file']"></fa>
          </span>
          <span class="text">Callout</span>
        </li>
        <li>
          <span class="icon">
            <fa :icon="['far', 'file']"></fa>
          </span>
          <span class="text">Classics</span>
        </li>
        <li>
          <span class="icon">
            <fa :icon="['far', 'file']"></fa>
          </span>
          <span class="text">Heros</span>
        </li>
        <li>
          <span class="icon">
            <fa :icon="['far', 'file']"></fa>
          </span>
          <span class="text">Actions</span>
        </li>
        <li>
          <span class="icon">
            <fa :icon="['far', 'file']"></fa>
          </span>
          <span class="text">Comedy</span>
        </li>
      </ul>
    </div>
    <div class="wrapper-Activity">
      <h4 class="title">Activity</h4>
      <chat></chat>
    </div>
  </div>
</template>

<script>
import { userAuth } from "@/firebase/SignIn";
import chat from "./Chat/Chat.vue";
export default {
  name: "Sidebar",
  setup() {
    let { user, isLogin, signIn, signOut } = userAuth();
    return { user, isLogin, signIn, signOut };
  },
  components: { chat },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
