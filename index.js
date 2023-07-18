const json_server = require('json-server');

// create a json server app
const server = json_server.create();

// set up path for db.json
const router = json_server.router('db.json');

// returns middleware used by JSON server
const middleware = json_server.defaults()

// set port
const port = process.env.PORT || 4000

// use port , middleware in server
server.use(middleware)
server.use(router)

// app listen
server.listen(port,()=>{
    console.log(`server start at ${port}`);
})
