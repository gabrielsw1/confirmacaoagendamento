import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const $http = axios.create({ baseURL: 'http://192.168.232.113:8989' })

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
            endereco: {
                bairro: '',
                cep: '',
                cidade: '',
                complemento: '',
                end: '',
                uf: '',
            },
            agendamentos: []
        },
    },
    getters: {
        buscaDadosPaciente(state) {
            return state.paciente
        },
        buscaDadosAgendamento(state){
            return state.paciente.agendamentos
        }
    },
    mutations: {
        alteraEndereco(state, payload) {
            state.paciente.endereco = payload
        },
        alteraAgendamentos(state, payload) {
            state.paciente.agendamentos = payload
        }
    },
    actions: {
        async buscaPorCEP({ commit }, payload) {
            try {
                const response = await $http.get(`/correios/consultaCEP/${payload}`)
                if (!response.data) {
                    return commit('alteraEndereco', {
                        err: 'CEP inválido',
                        bairro: '',
                        cep: '',
                        cidade: '',
                        complemento: '',
                        end: '',
                        uf: '',
                    })
                }
                commit('alteraEndereco', response.data.return)
            } catch (e) {
                console.log(e)
            }
        },
        async buscaAgendamentos({ commit }) {
            try {
                const response = await $http.get(`/agendamentos/consultaAgendamentos`)
                commit('alteraAgendamentos', response.data)
            } catch (error) {
                console.log(error)
            }
        }
    },
})