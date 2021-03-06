import users from '@/api/users.js'

export default {
  
  async createUser({ dispatch }, payload) {
    console.log(payload)
    try {
      let response = await users.createUser(payload)
      console.log(response)
      dispatch(
        "Snackbar/setSnackbar",
        {
          status: true,
          text: "Usuário cadastrado com sucesso",
          type: "success"
        },
        {
          root: true
        }
      )

      return true
    } catch (error) {
      console.error(error);
      dispatch(
        "Snackbar/setSnackbar",
        {
          status: true,
          //text: `Erro ao cadastrar - ${error.response.data.message}`,
          type: "error"
        },
        {
          root: true
        }
      );
      console.error(error);
      return error;
    }
  }
}