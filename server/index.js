const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("열심히 만들어 봅시다.")
})

app.get("/test", (req,res) => {
    res.send("통신 성공")
})

const port = 5000;
app.listen(port, () => console.log(`Server is listening on ${port}`));