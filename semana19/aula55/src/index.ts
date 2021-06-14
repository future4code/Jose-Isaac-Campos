import app from './controller/app';
import { login } from './controller/login';
import { signup } from './controller/signup';

app.post('/signup', signup);
app.post('/login', login);
