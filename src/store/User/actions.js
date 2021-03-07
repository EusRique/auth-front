import users from '@/api/users.js'
import messages from '@/plugins/messages.js'

export default {
  
  async createUser({ dispatch }, payload) {
    try {
      await users.createUser(payload)
      dispatch(
        "Snackbar/setSnackbar",
        {
          status: true,
          text: messages.showMessageSuccess("Usuário criada com sucesso"),
          type: "success"
        },
        {
          root: true
        }
      );

      return true

    } catch (error) {
      dispatch(
        "Snackbar/setSnackbar",
        {
          status: true,
          text: messages.showMessageError(`Erro ao cadastrar - ${error.response.data.error}`),
          type: "error"
        },
        {
          root: true
        }
      );

      return error;
    
    }
  }
}