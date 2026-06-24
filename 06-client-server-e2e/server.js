import express from "express"
import fs from "fs/promises"
import cors from "cors"
import { fileURLToPath } from "url"
import path from "path"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DB_PATH = path.join(__dirname, "db", "politicians.json")

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", async (req, res) => {
    try {
    const stringifypoloticians = await fs.readFile(`${__dirname}/db/politicians.json`)
    const politicians = JSON.parse(stringifypoloticians)
    res.json(politicians)  
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error")
    }
})

app.post("/bulk-users", async (req, res) => {
  try {
    const stringifyPoliticians = await fs.readFile(`${__dirname}/db/politicians.json`)
    const politicians = JSON.parse(stringifyPoliticians)
    const userFilter = req.body.map(Number)
    const response = politicians.filter((user) => userFilter.includes(user.id))
    res.json(response)
  } catch (error) {
    console.error(error.message)
    res.status(500).send("Internal server error")
  }
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})