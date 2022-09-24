// console.log("Hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World this is Rohan Das');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo selectors & more designing</title>
      <style>
          .container{
              border: 2px solid red;
              background-color: rgb(221, 238, 204);
              padding: 34px;
              margin: 34px auto;
              width: 666px;
          }
          a{
              text-decoration: none;
              color: black;
          }
          a:hover{
              color: rgb(8, 1, 1);
              background-color: rgb(224, 140, 43);
          }
          a:visited{
              background-color: yellow;
          }
          a:active{
              background-color: darkblue;
          }
          .btn{
              font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
              font-weight: bold;
              background-color: crimson;
              padding: 6px;
              border: none;
              cursor: pointer;
              font-size: 13px;
              border-radius: 4px;
          }
          .btn:hover{
              color: darkgoldenrod;
              background-color: aliceblue;
              border: 2px solid black;
          }
      </style>
  </head>
  <body>
      <div class="container" id="cont1">
          <h3>This is my heading</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias similique consequuntur quod doloribus omnis magni modi quaerat nam dolorem, sit molestias dicta enim cum maxime fugit tempore dignissimos minima obcaecati. Dolore eos ab pariatur!</p>
          <a href="https://yahoo.com" class="btn">Read more</a>
          <button class="btn">Contact us</button>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
