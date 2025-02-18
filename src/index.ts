import express from "express"
import dot from "dotenv"
import { usuarioRouters } from "./routers/index.ts"

dot.config({path: "/home/taller4O/usuario/src/.env"})

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hola Bienvenido seas!!')
  })

app.use("/usuario", usuarioRouters)
  
app.listen(port, () => {
console.log(`Puerto escuchado en: ${port}`)
})