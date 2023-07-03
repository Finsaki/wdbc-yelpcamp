require("dotenv").config();
const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");
const Review = require("../models/review");
const User = require("../models/user");

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
  await Review.deleteMany({});
  await User.deleteMany({});
  const userIds = await createUsers(3);
  await createCampgrounds(300, userIds);
};

const createCampgrounds = async (amount, userIds) => {
  for (let i = 0; i < amount; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: userIds[Math.floor(Math.random() * userIds.length)],
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      images: [
        {
          url: `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/v1687461024/YelpCamp/cu68hiqiwzor0syh8meh.png`,
          filename: "YelpCamp/cu68hiqiwzor0syh8meh",
        },
        {
          url: `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/v1687461024/YelpCamp/rf6asb6f8autylyelceh.png`,
          filename: "YelpCamp/rf6asb6f8autylyelceh",
        },
      ],
      geometry: {
        type: "Point",
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ],
      },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sapiente voluptate dolorum beatae animi, at eius voluptates officiis cumque eum ab exercitationem quos dicta culpa. Odio natus eveniet tempore molestiae.",
      price,
    });
    await camp.save();
  }
};

const createUsers = async (amount) => {
  const userIds = [];
  for (let i = 0; i < amount; i++) {
    const email = `user${i}@pw${i}.com`;
    const password = `pw${i}`;
    const username = `user${i}`;
    const user = new User({ email, username });
    const registeredUser = await User.register(user, password);
    userIds.push(registeredUser._id.toString());
  }
  return userIds;
};

seedDB().then(() => {
  mongoose.connection.close();
});
