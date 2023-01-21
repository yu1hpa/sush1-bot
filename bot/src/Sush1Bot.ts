import { Client, GatewayIntentBits, Message } from "discord.js";
import { CommandFactory } from "./commands/CommandFactory";

export class Sush1Bot {
  private static instance: Sush1Bot;

  private prefix = "!";
  private client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ],
  });
  private commandFactory = new CommandFactory(this.prefix);

  private constructor() {
    this.initializeClient();
  }

  static getInstance() {
    if (!Sush1Bot.instance) {
      Sush1Bot.instance = new Sush1Bot();
    }
    return Sush1Bot.instance;
  }

  connect() {
    this.client
      .login(process.env.DISCORD_BOT_TOKEN)
      .then(() => console.log("Discordに接続しました!"))
      .catch(() => console.error(`Discordに接続できませんでした`));
  }

  private initializeClient() {
    if (!this.client) return;

    this.setReadyHandler();
    this.setMessageHandler();
  }

  private setReadyHandler() {
    this.client.on("ready", async () => {
      console.log("Sush1Bot 接続完了");
    });
  }

  private setMessageHandler() {
    this.client.on("messageCreate", async (message: Message) => {
      if (message.author.bot) return;
      if (message.content.indexOf(this.prefix) !== 0) return;

      const command = this.commandFactory.createCommand(message);
      await command?.run();
    });
  }
}
