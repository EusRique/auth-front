<template>
  <div class="Content">
    <nav class="Content__Nav">
      <p>Não é membro? Inscreva-se agora!</p>
    </nav>
    <main class="Content__Main">
      <div class="Content__Main__AuthContent">
        <h2>Faça seu login!!!</h2>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',

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
.Content {
  // width: 100vw;
  // max-width: 700px;
  height: 100vh;
  width: 50vw;
  padding: 30px 30px 0;
  background: var(--color-secundary-login);

  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
  &__Nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 0;
    & p {
      margin: 0;
      text-align: right;
      font-size: 16px;

      flex-grow: 1;
    }
  }
  &__Main {
    margin: 0;
    padding: 0;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    &__AuthContent {
      width: 100%;
      max-width: 416px;
      & h2 {
        font-size: 24px;
        font-weight: bold;
      }
    }
  }
}
</style>