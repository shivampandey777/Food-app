// const { MailtrapClient } = require("mailtrap");
import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";


dotenv.config();
// console.log(process.env.MAILTRAP_API_TOKEN);

// const TOKEN = "********61ef";
// const ENDPOINT = "https://send.api.mailtrap.io/";

export const client = new MailtrapClient({
  token: process.env.MAILTRAP_API_TOKEN!,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Shivam said this ",
};