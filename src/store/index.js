import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const $http = axios.create({ baseURL: 'http://127.0.0.1:5000' })

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        paciente: {
            id: 1,
            nome: "Gabriel Moreno da Luz",
            sexo: "Masculino",
            dtNascimento: "24/05/1995",
            cpf: "99999999999",
            mae: "Nome da mae teste",
            pai: "Nome do Pai teste",
            endereco: {}
        },
    },
    getters: {
        buscaDadosPaciente(state) {
            return state.paciente
        }
    },
    mutations: {
        alteraEndereco(state, payload) {
            state.paciente.endereco = payload
        }
    },
    actions: {
        buscaPorCEP({ commit }, payload) {
            (async() => {
                try {
                    const response = await $http.get(`/correios/consultaCEP/${payload}`)
                    commit('alteraEndereco', response.data.return)
                } catch (e) {
                    console.log(e)
                }
            })()
        }
    },
})