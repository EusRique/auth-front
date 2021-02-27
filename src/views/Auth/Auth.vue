<template>
  <section class="Auth">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </section>
</template>

<script>
export default {
  name: "Auth",

  components: {},

  props: {},

  data: () => ({}),

  computed: {},

  created() {},
  
  mounted() {},
  
  methods: {},
  
  watch: {}
}
</script>

<style lang="scss" scoped>
.Auth {
  width: 100%;
}
</style>