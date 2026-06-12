import postgres from '../../database/connections/postgres.js'

export default {
    name: 'list-tables',
    description: 'Lista as tabelas do banco de dados',

    async handle() {
        const result = await postgres.query(`
            SELECT table_name
            FROM information_schema.tables
            WHERE table_schema = 'public'
            ORDER BY table_name
        `)

        if (result.rows.length === 0) {
            console.log('Nenhuma tabela encontrada no banco de dados.')
        } else {
            console.log('Tabelas encontradas no banco de dados:')
            result.rows.forEach(row => {
                console.log(` - ${row.table_name}`)
            })
        }

        await postgres.close()
    }
}
