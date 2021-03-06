import axios from '@/plugins/axios'

const createUser = async payload => await axios.post(`/signup`, { ...payload })

export default {
  createUser  
}