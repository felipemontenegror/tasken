async function connect(){
    const mysql = require('mysql2/promise')
    const connection = await mysql.createConnection('mysql://root:felipe@localhost3306/crudEschema')
    console.log('conectou mysql')
    return connection
}

module.exports = connect