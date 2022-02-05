import { Router } from 'express';
import productsRouter from '@modules/products/routes/products.routes';

const routes = Router();
//routes.get('/', (request, response) => {
//    return response.json({ message: 'Hello Dev!' });
//});
routes.use('/products', productsRouter);
//routes.use('/products', (req, res, next) => {
//    res.json(productsRouter);
//    res.send(productsRouter);
//    next();
//  });
//routes.get('/products', (req, res) => {
//    res.json(productsRouter);
//});
//routes.post('/products', (req, res) => {
//    res.json(productsRouter);
//    res.send(productsRouter);
//});
export default routes;
