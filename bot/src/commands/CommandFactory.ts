import { Message } from "discord.js";
import { Command, CommandType } from "../Command";
import { Ping } from "./Ping";

export class CommandFactory {
  constructor(private prefix: string) {}
  createCommand(message: Message): Command<CommandType> | null {
    const [keyword, args] = this.parseCommand(message.content);

    switch (keyword) {
      case CommandType.ping:
        return new Ping(message);
      default:
        return null;
    }
  }

  private parseCommand(mContent: string): [CommandType, string[]] {
    const args = mContent.slice(this.prefix.length).trim().split(/ +/g);
    const keyword = args.shift()?.toLowerCase() ?? "";
    const commandType = CommandType[keyword as keyof typeof CommandType];

    return [commandType, args];
  }
}
