import { Router } from 'express';
import productsRouter from '@modules/products/routes/products.routes';

const routes = Router();
//routes.get('/', (request, response) => {
//    return response.json({ message: 'Hello Dev!' });
//});
//routes.use('/products', ProductRouter);
routes.use('/products', productsRouter);
//routes.get('/products', (req, res) => {
//    res.json(ProductRouter);
//});
export default routes;
