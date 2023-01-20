import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import getDataSource from "./config";
import { Member } from "./entities/member";

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

  if (m.content === "!register") {
    const dataSource = await getDataSource();
    const m_author_id = parseInt(m.author.id);
    await dataSource.getRepository(Member).findOneBy({
      user_id: m_author_id,
    });
    await dataSource
      .createQueryBuilder()
      .insert()
      .into(Member)
      .values({
        user_id: m_author_id,
        username: m.author.username ?? "",
        user_level: 0,
        points_sum: 0,
      })
      .execute();
    const p = await m.channel.send(m.author.id);
    console.log(p.content);
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
