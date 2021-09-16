const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("우리 모두 화이팅..!")
})

app.get("/test", (req,res) => {
    res.send("통신 성공")
})

const port = 5000;
app.listen(port, () => console.log(`Server is listening on ${port}`));