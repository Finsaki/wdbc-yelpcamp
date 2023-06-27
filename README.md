# Yelpcamp

Project built by following Colt Steele's The Web Developer Bootcamp 2023.

> https://www.udemy.com/course/the-web-developer-bootcamp/

## Setup

Make sure MondoDB is connected and running detailed instructions [here](https://zarkom.net/blogs/how-to-install-mongodb-for-development-in-windows-3328).

For image upload to work, create a [Cloudinary account](https://cloudinary.com/) and a .env file at project root containing the following API values from the created account.

```
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_KEY=
CLOUDINARY_SECRET=
```

## Starting the development server

> node app.js / nodemon app.js

## Seed the database

> node seeds/index.js
