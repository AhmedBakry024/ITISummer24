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

const asciiArt = `

 _______  _______  _______           _______  _______   _________ _______    _______           _        _       _________ _        _______ 
(  ____ \(  ____ \(  ____ )|\     /|(  ____ \(  ____ )  \__   __/(  ____ \  (  ____ )|\     /|( (    /|( (    /|\__   __/( (    /|(  ____ \
| (    \/| (    \/| (    )|| )   ( || (    \/| (    )|     ) (   | (    \/  | (    )|| )   ( ||  \  ( ||  \  ( |   ) (   |  \  ( || (    \/
| (_____ | (__    | (____)|| |   | || (__    | (____)|     | |   | (_____   | (____)|| |   | ||   \ | ||   \ | |   | |   |   \ | || |      
(_____  )|  __)   |     __)( (   ) )|  __)   |     __)     | |   (_____  )  |     __)| |   | || (\ \) || (\ \) |   | |   | (\ \) || | ____ 
      ) || (      | (\ (    \ \_/ / | (      | (\ (        | |         ) |  | (\ (   | |   | || | \   || | \   |   | |   | | \   || | \_  )
/\____) || (____/\| ) \ \__  \   /  | (____/\| ) \ \__  ___) (___/\____) |  | ) \ \__| (___) || )  \  || )  \  |___) (___| )  \  || (___) |
\_______)(_______/|/   \__/   \_/   (_______/|/   \__/  \_______/\_______)  |/   \__/(_______)|/    )_)|/    )_)\_______/|/    )_)(_______)
                                                                                                                                           

`

app.listen(port, () => {
    console.log(asciiArt);
});