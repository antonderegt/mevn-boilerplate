# MEVN Boilerplate

MEVN means it contains MongoDB, ExpressJS, VueJS and NodeJS
it is based on vue cli (webpack-simple template).
Mongoose runs on top of MongoDB. [How to install MongoDB on Windows](https://www.youtube.com/watch?v=1uFY60CESlM&t=605s)

[MEVN Boilerplate with PassportJS to authenticate users](https://github.com/antonderegt/mevn-github-auth)

## How to start

Add a .env file with your PORT, MONGO_URI, [GITHUB_ID, GITHUB_SECRET and APP_URL](https://github.com/jaredhanson/passport-github) like this:

``` bash
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/voting-app
GITHUB_ID=233245n234566kjh243f
GITHUB_SECRET=k2hj432kjgjkh2g34kj2g4jkh23g4jk2342jhg34
APP_URL=http://127.0.0.1:3000/
```

After that execute the following:

``` bash
# clone the repo
git clone https://github.com/antonderegt/mevn-boilerplate.git

# install dependencies
npm install

# build and watch for changes
npm run serve

# run MongoDB
mongod

# run in a seperate terminal to serve at localhost:3000
nodemon server.js

# build for production with minification
npm run build
```
