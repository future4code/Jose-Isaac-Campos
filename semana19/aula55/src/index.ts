import app from './controller/app';
import { getAllUser } from './controller/getAllUsers';
import { login } from './controller/login';
import { signup } from './controller/signup';

app.get('/all', getAllUser);
app.post('/signup', signup);
app.post('/login', login);
