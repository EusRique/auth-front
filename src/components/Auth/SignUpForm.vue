<template>
  <div class="Content">
    <nav class="Content__Nav">
      <p>Já é um membro? <router-link class="router_link" to="/login">Entrar</router-link></p>
    </nav>
    <main class="Content__Main">
      <div class="Content__Main__AuthContent">
        <h2>Inscreva-se!!!</h2>
        <!-- <hr class="divider"> -->
        <v-form class="Content__Form">
          <div class>
            <v-label>Name</v-label>
            <v-text-field
              v-model="user.name"
              solo
            >
            </v-text-field>
          </div>
          <div class>
            <v-label>Email</v-label>
            <v-text-field
              v-model="user.email"
              solo
            >
            </v-text-field>
          </div>
          <div class>
            <v-label>CPF</v-label>
            <v-text-field
              v-model="user.cpf"
              solo
            >
            </v-text-field>
          </div>
          <div class="Content__Password">
            <div class="Content__Password__Box">
              <v-label>Senha</v-label>
              <v-text-field
                v-model="user.password"
                type="password"
                solo
              >
              </v-text-field>
            </div>
            <div class="Content__Password__Box">
              <v-label>Confirmar Senha</v-label>
              <v-text-field
                v-model="user.passwordConfirmation"
                type="password"
                solo
              >
              </v-text-field>
            </div>
          </div>
          <v-btn 
            color="warning" 
            dark
            @click="registerUser()"
          >
            Criar conta
          </v-btn>
        </v-form>
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'Login',

  components: {},

  props: {},

  data: () => ({
    user: {}
  }),

  computed: {},

  created() {},
  
  mounted() {},
  
  methods: {
    ...mapActions("User", {
      createUser: "createUser"
    }),
    
    async registerUser() {
      
      await this.createUser(this.user)
    }
  },
  
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
  background-color: var(--color-secundary-login);

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

      flex-grow: 0;
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
  &__Password {
    display: flex;
    justify-content: space-between;
    &__Box {
      width: 48%;
    }
  }
  .router_link {
    text-decoration: none;
    color: #000;
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