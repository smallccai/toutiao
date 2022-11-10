import axios from 'axios'
const request = axios.create({
  baseURl: 'http://ttapi.research.itcast.cn/'
})

export default request
