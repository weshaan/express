# Express

npm init -y: Inialise the proj
npm i -D nodemon: installed Locally
==> actually nodemon will automatically restart the application whenever any change detected.

## now create src/index.js file and before that add the following to package.json

"start": "node ./src/index.js",
"start:dev": "nodemon ./src/index.js"
--

_Run the app_
npm run start
or
npm start
or
npm run start:dev
