import {
    Client,
    GatewayIntentBits
} from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", async (m) => {
  if (m.content === "やい") {
    const pong = await m.channel.send("Pong");
    console.log(pong.content);
  }
});

client.login(process.env.TOKEN);