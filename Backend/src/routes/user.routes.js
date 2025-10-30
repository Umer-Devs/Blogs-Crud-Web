import express from 'express';
import { userSignIn } from '../controllers/user.controllers.js';

const router = express.Router();

router.post('/signin', userSignIn);

export {router}
