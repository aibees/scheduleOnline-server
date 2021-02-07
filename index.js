const port = process.env.PORT || 5000
const http = require('http')
const sql  = require('./database/connect')
const constant  = require('./constant')
const app = require('./app')

const server = http.createServer(app)

server.listen(port, async() => {
    
    console.log(`Server Started => http://localhost:${port}`);
    // mysql connection test
    var testQuery = 'SELECT \"SUCCESS\" AS \'TRUE\' FROM DUAL';
    result = await sql.select(testQuery);

    console.log(`SQL TEST Connection : ${result[0].TRUE}`);
});