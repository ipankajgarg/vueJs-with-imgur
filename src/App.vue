<template>
<div>
<AppHeader/>
<div class="ui container">
<router-view></router-view>
</div>
</div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "app",

  components: {
    AppHeader
  }
};
</script>
