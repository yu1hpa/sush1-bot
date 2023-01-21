export enum CommandType {
  ping,
}

export abstract class Command<CommandType> {
  abstract run(): Promise<void>;
  abstract canExecute(): boolean;
}
