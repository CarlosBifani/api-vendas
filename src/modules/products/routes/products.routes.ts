import routes from '@shared/http/routes';
import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';

const productRouter = Router();
const productsController = new ProductsController();
productRouter.get('/', productsController.Index);
productRouter.get('/:id', productsController.show);
productRouter.post('/', productsController.create);
productRouter.put('/:id', productsController.update);
productRouter.delete('/:id', productsController.delete);

export default routes;