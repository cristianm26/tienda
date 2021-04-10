import Producto from '../../Model/Producto'
import initDB from '../../utils/initDB'
initDB();
export default (req, res) => {
    Producto.find().then((productos)=>{
        res.status(200).json(productos)
    })
}
