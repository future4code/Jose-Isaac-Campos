import express from 'express';
import { revenueController } from '../controllers/revenueController';

const RouterRevenue = express.Router();

RouterRevenue.get('/recipe/:id', revenueController.get);
RouterRevenue.post('/recipe', revenueController.create);

export default RouterRevenue;
