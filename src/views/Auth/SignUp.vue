<template>
  <div class="signup">
    <SignUpForm />
  </div>
</template>

<script>
const SignUpForm = () => import('@/components/Auth/SignUpForm')

export default {
  name: 'SignUp',
  
  components: {
    SignUpForm
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