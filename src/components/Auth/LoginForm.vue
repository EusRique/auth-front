<template>
  <div class="Content">
    <nav class="Content__Nav">
      <p>Não é membro? <router-link class="router_link" to="/signup">Inscreva-se agora! </router-link></p>
    </nav>
    <main class="Content__Main">
      <div class="Content__Main__AuthContent">
        <h2>Faça seu login!!!</h2>
        <!-- <hr class="divider"> -->
        <v-form class="Content__Form">
          <div class>
            <v-label>Email</v-label>
            <v-text-field
              v-model="first"
              solo
            >
            </v-text-field>
          </div>
          <div class>
            <v-label>Senha</v-label>
            <v-text-field
              :type="'password'"
              v-model="first"
              solo
            >
            </v-text-field>
          </div>
          <v-btn color="warning" dark>Entrar</v-btn>
        </v-form>
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
      max-width: 500px;
      & h2 {
        font-size: 24px;
        font-weight: bold;
      }
      & hr.divider {
        overflow: visible;
        padding: 0;
        margin-bottom: 10px;
        border: none;
        border-top: 1px solid #e0e0e0;
        color: #6e6d7a;
        text-align: center;
      }
      & hr.divider:after {
          content: 'Ou';
          display: inline-block;
          position: relative;
          top: -15px;
          font-size: 14px;
          padding: 0 16px;
          background: #fff;
      }
    }
  }
  &__Form {
    margin-top: 10%;
  }
}
.theme--light.v-label {
  color: #000;
  font-weight: bold;
  font-size: 16px;
}
.theme--dark.v-btn.v-btn--has-bg {
  width: 50%;
  font-family: Poppins;
  font-size: 16px;
  text-transform: none;
  background-color: var(--color-button-login);
}
.router_link {
  text-decoration: none;
  color: #000;
}
</style>