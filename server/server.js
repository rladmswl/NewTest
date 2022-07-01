const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

//서버의 응답을 출력하고 싶을 때 app.get 이용
app.get('/', (req, res) => {
    res.send(`Welcome SHORT's page`);
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
  })