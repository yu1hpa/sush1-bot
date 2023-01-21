import { Message } from "discord.js";
import { Command, CommandType } from "../Command";

export class Ping extends Command<CommandType.ping> {
  constructor(private message: Message) {
    super();
  }

  async run(): Promise<void> {
    if (this.canExecute()) {
      try {
        await this.message.channel.send("Pong!");
      } catch (err) {
        console.error(`Pingコマンドを実行できませんでした`);
      }
    }
  }

  canExecute(): boolean {
    return true;
  }
}
