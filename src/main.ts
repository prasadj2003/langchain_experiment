import * as dotenv from 'dotenv';
import { ChatFireworks } from "@langchain/community/chat_models/fireworks";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

dotenv.config();

const model = new ChatFireworks({
  model: "accounts/fireworks/models/llama-v3p1-70b-instruct",
  temperature: 0,
  fireworksApiKey: process.env.FIREWORKS_API_KEY, // Use the API key from the environment variable
});

const messages = [
  new SystemMessage("Create a rhymin poem on a person's beauty whose name will be provided"),
  new HumanMessage("Aadit"),
];

async function translateMessage() {
  const response = await model.invoke(messages);
  console.log(response.content);
}

translateMessage();
