
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname));
app.use((req,res,next)=>{
  response.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
  next();
})
app.all('*', (req, res) => {
  res.status(200).sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 8080);
