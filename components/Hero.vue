<template>
  <div>
    <div class="container">
      <div class="header">
        <h1>المدونه</h1>
      </div>
      <div class="posts">
        <div class="post" v-for="post in posts" :key="post.id">
          <a class="post-link-hidden" :href="`/${post.id}`"></a>
          <img :src="post.thumbnail" :alt="post.title" class="img-top" />
          <p class="post-title">{{ post.title }}</p>
          <div class="post-footer">
            <p>{{ format(post.createdAt, "ar") }}</p>
          </div>
        </div>
      </div>
    </div>
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
  "sm": 540px,
  "md": 720px,
  "lg": 960px,
  "xl": 1140px,
);

$post-breakpoints: (
  "xs": (
    "repeat": 1,
    "width": 100%,
  ),
  "sm": (
    "repeat": 1,
    "width": 100%,
  ),
  "md": (
    "repeat": 2,
    "width": 50%,
  ),
  "lg": (
    "repeat": 3,
    "width": 30%,
  ),
  "xl": (
    "repeat": 3,
    "width": 30%,
  ),
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
  padding: 0px 15px;
  margin: 3rem auto;
  @each $breakpoint, $max-width in $container-breakpoints {
    @media only screen and(min-width: map-get($map: $breakpoints, $key: $breakpoint)) {
      max-width: $max-width;
    }
  }
  .header {
    margin: 4rem 0px;
    @each $breakpoint, $header in $header-breakpoints {
      @media only screen and (min-width: map-get($map: $breakpoints, $key: $breakpoint)) {
        margin: map-get($map: $header, $key: "margin");
      }
    }
  }

  .posts {
    display: grid;
    grid-template-columns: repeat(3, 30%);
    grid-auto-rows: auto;
    grid-gap: 1rem;
    @each $breakpoint, $template-columns in $post-breakpoints {
      @media only screen and (min-width: map-get($map: $breakpoints, $key: $breakpoint)) {
        grid-template-columns: repeat(
          map-get($map: $template-columns, $key: "repeat"),
          map-get($map: $template-columns, $key: "width")
        );
      }
    }
    .post {
      border-radius: 4px;
      width: 100%;
      position: relative;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
      transition: box-shadow 0.5s ease;
      &:hover {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
      .post-link-hidden {
        position: absolute;
        width: 100%;
        height: 100%;
        background: transparent;
      }
      .img-top {
        width: 100%;
        // height: 100%;
      }
      .post-title {
        padding: 6px 12px;
        font-size: 0.9rem;
      }
      .post-footer {
        width: inherit;
        padding: 6px 12px;
        p {
          color: #9f7aea;
        }
      }
    }
  }
}
</style>

<script>
import { format, register } from "timeago.js";

const timeTypes = [
  ["ثانية", "ثانيتين", "%s ثوان", "%s ثانية"],
  ["دقيقة", "دقيقتين", "%s دقائق", "%s دقيقة"],
  ["ساعة", "ساعتين", "%s ساعات", "%s ساعة"],
  ["يوم", "يومين", "%s أيام", "%s يوماً"],
  ["أسبوع", "أسبوعين", "%s أسابيع", "%s أسبوعاً"],
  ["شهر", "شهرين", "%s أشهر", "%s شهراً"],
  ["عام", "عامين", "%s أعوام", "%s عاماً"],
];

function formatTime(type, n) {
  if (n < 3) return timeTypes[type][n - 1];
  if (n >= 3 && n <= 10) return timeTypes[type][2];
  return timeTypes[type][3];
}

register("ar", function (number, index) {
  if (index === 0) {
    return ["منذ لحظات", "بعد لحظات"];
  }

  const timeStr = formatTime(Math.floor(index / 2), number);
  return ["منذ" + " " + timeStr, "بعد" + " " + timeStr];
});

export default {
  props: ["posts"],
  methods: {
    format,
  },
};
</script>