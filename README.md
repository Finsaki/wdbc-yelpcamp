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

### Production

For production environment we use [MongoDB Atlas](https://www.mongodb.com/products/platform/cloud) to store our data and sessions.

To set up Atlas do the following:

- Create Database into Atlas (Shared -tier is free)
- Create database user and password
- Whitelist your IP's that connect to the database
- Define DB_URL as a environmental variable for mongo Atlas connection (contains database user and password)

In production environment the following environmental variables should be defined in addition to previously mentioned .env values.

```
DB_URL=
SECRET=
PORT=
```

## Starting the development server

> npm start

OR

> nodemon app.js

## Seed the database

> node seeds/index.js
