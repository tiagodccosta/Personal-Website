const express = require("express");
const app = express(); //start express app
const path = require("path"); // relative windows or Mac
const router = express.Router();

app.use(express.static('public')); // sending static files 

router.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, "/public/index.html"));
});

router.get("*", (request, response) => {
    response.json("Page not found!")
});

app.use("/", router);

app.listen(8080, () => {
    console.log("Server running at port", 8080);
})

