<template>
  <div class="login">
    <LoginForm />
  </div>
</template>

<script>
const LoginForm = () => import('@/components/Auth/LoginForm')

export default {
  name: 'Login',

  components: {
    LoginForm,
  },

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

</style>