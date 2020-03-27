# Hackerbay Interview Backend

## A simple stateless microservice in Nodejs with the following functionalities -

Authentication
JSON patching
Image Thumbnail Generation



### Endpoints

* ```POST``` ```/api/auth```
  - takes in ```email``` and password and returns a JSON web token
* ```POST``` ```/api/createthumbnail```
  - generates thumbnail after a resize of the initial.
* ```POST``` ```/api/patch```
  - Patches JSON document using jsonpatch by applying patch to document.
  
  ### Dependencies
  
  * NodeJs
  * Express
  * jsonpatch
  * bunyan
  * jimp
  * jsonwebtoken   


  ### Start
  
  * Run ```npm start``` to start server
  * Or ```npm run dev``` for development purpose


  ### Test
  
  * ```npm test```
