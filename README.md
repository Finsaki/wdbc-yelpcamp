# Yelpcamp

Project built by following Colt Steele's The Web Developer Bootcamp 2023.

> https://www.udemy.com/course/the-web-developer-bootcamp/

## Setup

Make sure MondoDB is connected and running. Detailed instructions [here](https://zarkom.net/blogs/how-to-install-mongodb-for-development-in-windows-3328).

For image upload to work, create a [Cloudinary account](https://cloudinary.com/) and a .env file at project root containing the following API values from the created account.

```
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_KEY=
CLOUDINARY_SECRET=
```

Also for geolocation data to work, create a [Mapbox account](https://www.mapbox.com/) and add the following API value to the .env

```
MAPBOX_TOKEN=
```

## Starting the development server

> node app.js

OR

> nodemon app.js

## Seed the database

> node seeds/index.js
