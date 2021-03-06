const express = require("express");
const app = express(); //start express app
const path = require("path"); // relative windows or Mac
const router = express.Router();

app.use(express.static('public')); // sending static files 


//sends landing page to sever, defined as the root of the website
router.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, "/public/pages/index.html"));
});

//sends /Software page to the server
router.get('/Software', (request, response) => {
    response.sendFile(path.join(__dirname, "/public/pages/software.html"));
});

//sends /Sports page to the server
router.get('/Sports', (request, response) => {
    response.sendFile(path.join(__dirname, "/public/pages/sports.html"));
});

//sends /Contact page to the server
router.get('/Contact', (request, response) => {
    response.sendFile(path.join(__dirname, "/public/pages/contact.html"));
});

//
//this handles errors for missing directories
//if the directory is not identified it shows a error 
//message showing the page its found
//
//Further in the project will show a template instead of the error message
//
router.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "/public/pages/404.html"));
});

app.use("/", router);


//starts the server listening in port 8080
//logs in the terminal message if server is running properly
app.listen(8080, () => {
    console.log("Server running at port", 8080);
})

