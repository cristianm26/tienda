import mongoose from 'mongoose';

const productosSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    mediaUrl:{
        type: String,
        required: true
    }
    
})

export default mongoose.models.producto || mongoose.model("productos", productosSchema)