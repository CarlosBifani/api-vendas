import { Router } from 'express';
import ProductRouter from '@modules/products/routes/products.routes';

const routes = Router();
//routes.get('/', (request, response) => {
//    return response.json({ message: 'Hello Dev!' });
//});
//routes.use('/products', ProductRouter);

//routers/blogPostsRouter.js
routes.get('/products', (req, res) => {
    res.json(ProductRouter);
});

export default routes;
