import {StreamChat} from "stream-chat";
import {StreamClient} from "@stream-io/node-sdk";
import {ENV} from "./env.js";

if (!ENV.STREAM_API_KEY || !ENV.STREAM_SECRET_KEY) {
    throw new Error("STREAM_API_KEY or STREAM_SECRET_KEY is missing");
}

export const chatClient = StreamChat.getInstance(ENV.STREAM_API_KEY, ENV.STREAM_SECRET_KEY);    // will be used for chat feature
export const streamClient = new StreamClient(ENV.STREAM_API_KEY, ENV.STREAM_SECRET_KEY);       // will be used for video calls

export const upsertStreamUser = async (userData) => {
    try {
        await chatClient.upsertUser(userData);
        console.log("Stream user upserted successfully:", userData);
    } catch (e) {
        console.log("Error upserting Stream user:", e);
    }
};

export const deleteStreamUser = async (userId) => {
    try {
        await chatClient.deleteUser(userId);
        console.log("Stream user deleted successfully:", userId);
    } catch (e) {
        console.log("Error deleting the Stream user:", e);
    }
};
