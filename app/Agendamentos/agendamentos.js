const express = require('express')
const router = express.Router()
const db = require('../dbConnect')

router.get('/consultaAgendamentos', (req, res) => {
    (async () => {
        const client = await db.pool.connect()
        try {
            const agendamentos = await client.query(
                    `SELECT
                    agend.id_agendamento AS "idAgendamento",
                    p.id_paciente AS "idPaciente",
                    TO_CHAR(agend.data_atend_iten_agend, 'DD/MM/YYYY') AS "dtAgendamento",
                    TO_CHAR(agend.hora_atend_iten_agen, 'HH:MM') AS "hrAgendamento",
                    proc.descr_red_proc AS "descrProcedimento",
                    agend.obs_resp_pag AS "observacaoAgendamento",
                    conv.nm_convenio AS "nmConvenio",
                    cat.nm_categoria AS "nmCategoria",
                    prest.nm_prestador AS "nmPrestador",
                    h.nome AS "nomeHospital",
                    l.logradouro || ', ' || h.numero AS "logradouro"
                    FROM
                        sigh.agendas ag
                    LEFT JOIN sigh.agendamentos agend ON
                        agend.cod_agenda = ag.id_agenda
                    LEFT JOIN sigh.convenios conv ON
                        conv.id_convenio = agend.cod_convenio
                    LEFT JOIN sigh.categorias cat ON
                        cat.id_categoria = agend.cod_categoria
                    LEFT JOIN sigh.pacientes p ON
                        p.id_paciente = agend.cod_paciente
                    LEFT JOIN sigh.prestadores prest ON
                        prest.id_prestador = agend.cod_medico
                    INNER JOIN sigh.hospitais h ON
                        h.id_hospital = ag.cod_hospital
                    LEFT JOIN endereco_sigh.logradouros l ON
                        l.id_logradouro = h.cod_logradouro
                    LEFT JOIN sigh.procedimentos proc ON
                        proc.id_procedimento = agend.cod_procedimento
                    WHERE
                        agend.cod_paciente = 34262`) //nao esquecer de mudar o left do procedimento para INNER
                    res.status(200).json(agendamentos.rows)
        } finally {
            client.release()
        }
    })().catch((e) => {
        res.status(400).json(e)
    })

})

module.exports = router