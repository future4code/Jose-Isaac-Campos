import axios from "axios"

export const getAddress = async (cep: number) => {
  const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

  return {
    patio: result.data.logradouro,
    neighborhood: result.data.bairro,
    city: result.data.localidade,
    state: result.data.uf
  }
}