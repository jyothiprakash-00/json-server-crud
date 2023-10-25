// import json- server in index.js file
const jsonServer=require('json-server')


// create a sever for video app
const videoServer=jsonServer.create()

// set up path/route from json file
const router = jsonServer.router("db.json")

// Returns middleware used by JSON Server.
const middlewares = jsonServer.defaults()

// set up port for running server
const port =4000 || process.env.PORT

// use middleware and router in server 
videoServer.use(middlewares)
videoServer.use(router)

// to listen server for resolving request from client

videoServer.listen(port,()=>{
    console.log(`video server started at ${port} and waiting for client server` );
})