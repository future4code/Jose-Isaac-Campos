import { app } from "./controller/app"
import taskRouter from "./routes/taskRouter"
import useRouter from "./routes/useRouter"

app.use('/user', useRouter)
app.use('/task', taskRouter)



