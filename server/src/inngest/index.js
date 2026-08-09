import { Inngest } from "inngest";
import userModel from "../models/user.model.js";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "cinevault" });

// Inngest function to create user and save it data in database
const syncUserCreation = inngest.createFunction(
  {
    id: "sync-user-from-clerk",
    triggers: [
      { event: "clerk/user.created" }
    ]
  },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;

    const userData = {
      _id: id,
      email: email_addresses[0].email_address,
      name: `${first_name} ${last_name}`,
      image: image_url
    };

    await userModel.create(userData);
  }
);

// Inngest function to delete user data from database
const syncUserDeletion = inngest.createFunction(
  {
    id: "delete-user-from-clerk",
    triggers: [
      { event: "clerk/user.deleted" }
    ]
  },
  async ({ event }) => {
    const { id } = event.data;

    await userModel.findByIdAndDelete(id);
  }
);

// Inngest function to update user data in database
const syncUserUpdation = inngest.createFunction(
  {
    id: "update-user-from-clerk",
    triggers: [
      { event: "clerk/user.updated" }
    ]
  },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;

    const userData = {
      email: email_addresses[0].email_address,
      name: `${first_name} ${last_name}`,
      image: image_url
    };

    await userModel.findByIdAndUpdate(id, userData);
  }
);

// Create an array where we'll export future Inngest functions
export const functions = [
  syncUserCreation,
  syncUserDeletion,
  syncUserUpdation
];