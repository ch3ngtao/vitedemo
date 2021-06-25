<template>
  <div class="title">{{input}}小仙女</div>
  <p style="color: #eb1818">请你</p>
  <img src="../assets/fn.jpg" alt="">
  <p style="color: pink;">怎么能没人送花呢</p>
  <img src="../assets/h.jpg" alt="">
  <p style="color: red; font-size: 0.52rem;">做个仙女，不要生气啦</p>
  <img src="../assets/xn.jpg" alt="">
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    input: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const count = ref(0)
    return { count }
  }
})
</script>

<style scoped>
.title {
  height: 1rem;
  font-size: 0.42rem;
  width: 100%;
}
img {
  width: 100%;
  height: auto;
}
p {
  font-size: 0.48rem;
}
</style>
