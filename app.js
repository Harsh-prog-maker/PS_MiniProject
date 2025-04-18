const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to handle form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static CSS file
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
    <html>
      <head>
        <title>Docker App</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <div class="container">
          <h1>Enter Your Name</h1>
          <form method="POST" action="/">
            <input type="text" name="username" placeholder="Your Name" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      </body>
    </html>
    `);
});

app.post('/', (req, res) => {
    const name = req.body.username;
    res.send(`
    <html>
      <head>
        <title>Welcome</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <div class="container">
          <h1>Welcome ${name} to the world of Dockerized apps! 🚀</h1>
        </div>
      </body>
    </html>
    `);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
