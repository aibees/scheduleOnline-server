const port = process.env.PORT || 5000
const http = require('http')
const app = require('./app')

const server = http.createServer(app)

//route
app.use('/user', require('./routers/user'));

server.listen(port, () => 
    console.log(`server start on port ${port}`),
    require('./models').sequelize.sync({ force : false })
    .then(() => {
        console.log("Database sync somplete");
    })
)