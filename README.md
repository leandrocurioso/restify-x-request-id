# Restify X-Request-Id
![alt Build](https://travis-ci.org/leandrocurioso/restify-x-request-id.svg?branch=master)

A middleware for restify to add request id in response object.

The default behaviour is very simple, the middleware checks if there's an UUID in X-Request-Id in request header, if so just set the same header to response object.

If there's no X-Request-Id in request object then a new UUID is generated and added to the response object, so this way every micro service that is called will keep passing the same ID to keep tracking of the request from the beginning to the end.

 ## Usage ES6/Typescript

```javascript
import RestifyXRequestId from "restify-x-request-id";

// Set middleware
server.use(RestifyXRequestId);
 ```

## Usage ES5

```javascript
var RestifyXRequestId = require("restify-x-request-id");

// Set middleware
server.use(RestifyXRequestId);
 ```
 
## Adding the module to the project

Add this into your **package.json** file.

**IMPORTANT: This is not a npm module but will work the same way, you must add manualy because the base code is here in GitHub.**

```javascript
"dependencies": {
  ...
  "restify-x-request-id": "leandrocurioso/restify-x-request-id#master"
}
 ```
 
 If you use **npm install** will be installed like a npm module direct to the **node_modules** folder.
 
 
 You can also install with terminal.
 
 ```
 $ npm install --save git+https://github.com/leandrocurioso/restify-x-request-id.git
```
 
 ## Obtaining the generated request id
 
 Since the X-Request-Id is linked to the response header (res), to access you must write:
 
 ```javascript
 server.use((req, res, next) => {
  console.log(res.header("X-Request-Id"));
  //The output will be something like: f2bf0a3b-5d34-43ad-879b-6eceaa0b089e
  return next();
 );
  ```
