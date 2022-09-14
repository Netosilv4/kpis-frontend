import axios from 'axios'

const { REACT_APP_API_URL } = process.env

export const loginHandler = async (data: FormData) => {
  try {
    const response = await axios.post(`${REACT_APP_API_URL}/login`, {
      email: data.get('email')
    })
    return {
      status: response.status,
      data: response.data,
      message: 'Login realizado com sucesso'
    }
  } catch (err: any) {
    if (err.response) {
      return {
        message: err.response.data.message || 'Erro interno',
        status: err.response.status || 500
      }
    }
    return {
      message: 'Erro interno, tente novamente mais tarde',
      status: 500,
      data: err
    }
  }
}
