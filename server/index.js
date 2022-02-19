const express = require("express");
const app = express();
require('dotenv').config({ path: './env/.env' });
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/new", (req, res) => {
    
});

app.listen(PORT, () => console.log(`Server is Running at Port: ${PORT}`))