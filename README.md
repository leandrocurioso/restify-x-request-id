# Restneer X-Request-Id
A middleware for restneer to handle request id in response.

## Usage

```javascript
const RestneerXRequestId = require('restneer-x-request-id');

// Set middleware
server.use(RestneerXRequestId);
 ```

## Adding the module to the project

Add this into your **package.json** file.

**IMPORTANT: This is not a npm module but will work the same way, you must add manualy because the base code is here in GitHub.**

```javascript
"dependencies": {
  ...
  "restneer-x-request-id": "leandrocurioso/restneer-x-request-id#master"
}
 ```
 
 If you use **npm install** will be installed like a npm module direct to the **node_modules** folder.
 
 
 You can also install with terminal.
 
 ```
 $ npm install --save git+https://github.com/leandrocurioso/restneer-x-request-id.git
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
