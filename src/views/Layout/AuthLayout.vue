<template>
  <div class="AuthLayout">
    <section class="AuthLayout__SideBar">
      <div class="AuthLayout__SideBar__Content">
        <img :src="bannerLogin" />
      </div>
    </section>
    <section class="AuthLayout">
      <router-view />
    </section>
  </div>
</template>

<script>
export default {
  name: 'AuthtLayout',

  components: {},

  props: {},

  data: () => ({
    bannerLogin: require('@/assets/images/space-discovery.svg')
  }),

  computed: {},

  created() {},
  
  mounted() {},
  
  methods: {},
  
  watch: {}
}
</script>

<style lang="scss" scoped>
.AuthLayout {
  height: 100vh;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  &__SideBar {
    // width: 100vw;
    // max-width: 700px;
    height: 100vh;
    width: 50vw;
    background: var(--color-primary-login);
    &__Content img {
      margin-top: 10%;
    }
  }
}
</style>