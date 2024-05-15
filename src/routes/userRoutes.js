import { Router } from 'express';
import { verifyUser } from '../controllers/login-controller.js';

const router = Router();

router.post('/login', verifyUser);

export default router;
