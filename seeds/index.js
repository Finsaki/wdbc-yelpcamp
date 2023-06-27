require("dotenv").config();
const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: "64915b6773c62b4b497186ee",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      images: [
        {
          url: `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/v1687461024/YelpCamp/cu68hiqiwzor0syh8meh.png`,
          filename: "YelpCamp/cu68hiqiwzor0syh8meh",
        },
        {
          url: `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/v1687461024/YelpCamp/xfh4tixs0czmcbwvmyof.png`,
          filename: "YelpCamp/xfh4tixs0czmcbwvmyof",
        },
        {
          url: `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/v1687461024/YelpCamp/rf6asb6f8autylyelceh.png`,
          filename: "YelpCamp/rf6asb6f8autylyelceh",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sapiente voluptate dolorum beatae animi, at eius voluptates officiis cumque eum ab exercitationem quos dicta culpa. Odio natus eveniet tempore molestiae.",
      price,
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
