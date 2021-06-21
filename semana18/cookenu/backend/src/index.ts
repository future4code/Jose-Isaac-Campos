import app from './app';
import RouterRevenue from './routes/revenueRouter';
import RouterUser from './routes/userRouter';

app.use(RouterUser);
app.use(RouterRevenue);
