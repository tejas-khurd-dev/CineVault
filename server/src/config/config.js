import dotenv from "dotenv";

dotenv.config();

const config = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET,
  EMAIL: process.env.EMAIL,
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
};

export default config;
