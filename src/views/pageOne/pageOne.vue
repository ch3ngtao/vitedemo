<template>
  <div>
    <p>hello world</p>
    <p>{{ hello }}</p>
    <HelloWorld />
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  components: {
    HelloWorld
  },
  setup() {
    const hello = ref("hello world")

    onMounted(() => {
      console.log(hello);
    })
    return {
      hello
    }
  },
})
</script>
