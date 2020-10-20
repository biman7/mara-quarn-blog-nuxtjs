<template>
  <div>
    <navbar />
    <div class="container">
      <p class="header">{{ post.title }}</p>
      <div class="post-thumbnail">
        <img :src="post.thumbnail" />
      </div>
      <div class="section">
        {{ post.content }}
      </div>
      <div id="disqus_thread" style="margin: 20px 0px;"></div>
      <noscript
        >Please enable JavaScript to view the
        <a href="https://disqus.com/?ref_noscript"
          >comments powered by Disqus.</a
        ></noscript
      >
    </div>
    <bottom-footer />
  </div>
</template>


<style scoped lang="scss">
$breakpoint-xs: 0;
$breakpoint-sm: 576px;
$breakpoint-md: 768px;
$breakpoint-lg: 992px;
$breakpoint-xl: 1200px;

$breakpoints: (
  "xs": $breakpoint-xs,
  "sm": $breakpoint-sm,
  "md": $breakpoint-md,
  "lg": $breakpoint-lg,
  "xl": $breakpoint-xl,
);

$container-breakpoints: (
  "sm": 600px,
  "md": 770px,
  "lg": 680px,
  "xl": 855px,
);

$header-breakpoints: (
  "xs": (
    "margin": 1rem 0px,
  ),
  "sm": (
    "margin": 1rem 0px,
  ),
  "md": (
    "margin": 3rem 0px,
  ),
  "lg": (
    "margin": 4rem 0px,
  ),
);

.container {
  width: 100%;
  margin: 0px auto;
  @each $breakpoint, $max-width in $container-breakpoints {
    @media only screen and(min-width: map-get($map: $breakpoints, $key: $breakpoint)) {
      max-width: $max-width;
    }
  }
  .header {
    margin: 4rem 0px;
    font-size: 4vw;
    text-align: center;
    @each $breakpoint, $header in $header-breakpoints {
      @media only screen and (min-width: map-get($map: $breakpoints, $key: $breakpoint)) {
        margin: map-get($map: $header, $key: "margin");
      }
    }
  }
  .section {
    font-size: 16px;
    padding: 80px 40px;
    @media only screen and (max-width: $breakpoint-md) {
      padding: 4px 12px;
      font-size: 12px;
    }
  }
  .post-thumbnail {
    width: inherit;
    img {
      width: inherit;
    }
    @media only screen and (min-width: $breakpoint-xl) {
      padding: 0px 64px;
    }
  }
}
</style>

<script>
export default {
  async asyncData({ $axios, params, error }) {
    try {
      const post = await $axios.$get(`/api/posts/${params.pid}`);
      return { post };
    } catch ({ response }) {
      if (response.status == 404) {
        error({
          statusCode: 404,
          message: "Post not found",
        });
      }
    }
  },
  mounted() {
    var disqus_config = function () {
      this.page.url = `http://192.168.1.109:3000/${this.$route.params.pid}`;
      this.page.identifier = this.$route.params.pid;
    };
    (function () {
      // DON'T EDIT BELOW THIS LINE
      var d = document,
        s = d.createElement("script");
      s.src = "https://mara-quran-project-blog-test-2.disqus.com/embed.js";
      s.setAttribute("data-timestamp", +new Date());
      (d.head || d.body).appendChild(s);
    })();
  },
};
</script>