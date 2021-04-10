import mongoose from 'mongoose';

const initDB = () => {
    if (mongoose.connections[0].readyState) {
        console.log('Lista para ser conectada')
        return;
    }
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
    mongoose.connection.on("conectada",()=> console.log('Conectada a MongoDb Atlas'))
    mongoose.connection.on("error",(err)=> console.log(err))
}

export default initDB