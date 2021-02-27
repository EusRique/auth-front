<template>
	<component :is='currentComponent' />
</template>

<script>
const AuthLayout = () => import('@/views/Layout/AuthLayout.vue')
export default {
	name: 'App',

	components: { AuthLayout },

	props: {},

  data: () => ({}),

  computed: {
		currentComponent() {
			return 'AuthLayout'
		}
	},

  created() {},
  
  mounted() {},
  
  methods: {},
  
  watch: {}
}
</script>

<style>

</style>

