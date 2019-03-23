# Personal-Website
Node js version of my personal website. This is still in early development and is not the live version of the site.

# Get started
- Install node js on your machine
- cd to root directory, type "npm install" for dependencies
- type "nodemon server.js" to start the server
- Go to http://localhost:8080

## Main server file
server.js

## Routing
All api requests go through /api/

All front end and static requests go through /          (root)

Meaning if you go to localhost:8080/software it will take you to the software page
with html, css, javascript etc.. but if you go to localhost:8080/api/software
it will not grab html.. the route assumes you are trying to access an api functionality

## HTML Pages
All html pages are in the /public/pages directory. 

## Static Files (CSS, Javascript)
/public/static directory

When an html page links to a stylesheet or some script, express serves the Static
files in the /public/ directory.


## Media Queries

@media (min-width: 375px) and (max-width: 599px) {}

@media (min-width: 600px) and (max-width: 767px) {}

@media (min-width: 768px) and (max-width: 1023px){}

@media (min-width: 1024px) and (max-width: 1439px){}

@media (min-width: 1440px) and (max-width: 1679px){}

@media (min-width: 1680px) and (max-width: 1919px) {}

@media (min-width: 1920px) {}
