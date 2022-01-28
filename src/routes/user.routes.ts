import express from 'express';
import * as UserController from '../controllers/user.controller';

const router = express.Router();

router.get('/user', UserController.find);
router.post('/user', UserController.create);
router.put('/:id/user', UserController.update);
router.get('/:id/user', UserController.findOne);
router.delete('/:id/user', UserController.remove);

export default router;
