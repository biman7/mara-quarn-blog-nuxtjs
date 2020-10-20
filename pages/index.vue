<template>
  <div>
    <navbar />
    <hero :posts="posts" />
    <bottom-footer />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const posts = await $axios.$get("/api/posts");
    return { posts };
  },
};
</script>