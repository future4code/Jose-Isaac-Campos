import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from "./endpoints/login"
import getProfile from "./endpoints/getProfile"
import deleteUser from "./endpoints/deleteUser"
import getUser from "./endpoints/getUser"

app.get('/user', getUser)
app.get('/user/profile', getProfile)
app.post('/user/signup', createUser)
app.post('/user/login', login)
app.put('/user/edit/:id', editUser)
app.delete('/user/:id', deleteUser)