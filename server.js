import express from "express"
import MainRouter from "./routes/MainRouter.js"

const app = express()
app.use(express.json())

app.use("/api",MainRouter)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`server running ${PORT}`);
})
