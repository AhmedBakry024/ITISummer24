const express = require("express");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");


const app = express();
const port = 3000;


app.use(bodyParser.json());


app.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(`username: ${username}, password: ${hashedPassword}`);
    res.send("Signup successful");
    }
);

app.listen(port, () => {
    console.log('Server is running on port 3000');
});