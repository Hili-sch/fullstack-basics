import express from "express";

const app = express();

app.use(express.json())


app.get("/", (req, res) => {
  try {
    console.log("sanded");
    
    res.status(200).send("Hello Express");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/:id", (req, res) => {
  try {
    console.log("sanded");
    
    const userId = req.params.id
    const response = {
        userId,
        "Hili": "slipi"
    }

    console.log(response);
    

    res.status(200).send("Hello Express");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/", (req, res) => {
  try {
    const response = {
        data: req.body,
        message: "Syccessfully handled request!"
    }

    console.log(response);
    
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
