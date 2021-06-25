<template>
  <div class="box" v-if="!shwo">
    <p>请输入小仙女名字</p>
    <input type="text" v-model="input" @blur="checkInput">
    <button @click="changeShow" v-if="shwoBtn">点我点我</button>
  </div>
  <HelloWorld :input="input" v-if="shwo" />
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  components: {
    HelloWorld
  },
  setup() {
    const input = ref("")
    const shwo = ref(false)
    const shwoBtn = ref(false)
    const changeShow = () => {
      shwo.value = !shwo.value
    }
    const checkInput = () => {
      shwoBtn.value = input.value
    }
    return {
      input,
      shwo,
      shwoBtn,
      changeShow,
      checkInput
    }
  },
})
</script>

<style>
p {
  font-size: 0.32rem;
}
input {
  display: block;
  height: 0.5rem;
  width: 60%;
  margin: 0 auto;
}
button {
  display: block;
  margin: 0 auto;
  margin-top: 0.4rem;
  border: none;
  background: pink;
  height: 0.5rem;
  width: 2rem;
}
</style>
