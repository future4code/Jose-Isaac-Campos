import { app } from './controller/app'
import { ping } from './controller/ping'
import { postRouter } from './routes/postRouter'
import { userRouter } from './routes/userRouter'

app.use('/users', userRouter)
app.use('/posts', postRouter)

app.get('/ping', ping)

