const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});

const app = require('./app');

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT,()=>{
    console.log(`Server Created on port ${PORT}`);
});

process.on('uncaughtException',(err)=>{
    const uncaughtException = 'uncaughtException 💣 '.toUpperCase();
    console.log(`${uncaughtException}, Shutting Down`);
    console.log(err.name,err.message);
    server.close(()=>{
      process.exit(1);
    });
});


process.on('unhandledRejection',(err)=>{
    console.log('UNHANDLED REJECTION BOOOOMMMM!!! 💣 , Shutting Down');
    console.log(err.name,err.message);
    server.close(()=>{
      process.exit(1);
    });
});