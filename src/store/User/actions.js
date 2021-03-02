import users from '@/api/users.js'

export default {
  async createUser(payload) {
    try {
      await users.createUser(payload)

      return true
    } catch (error) {
      console.error(error);
      
      return error;
    }
  }
}