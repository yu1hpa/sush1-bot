import dotenv from "dotenv";
import { Sush1Bot } from "./Sush1Bot";

dotenv.config();

const sush1Bot = Sush1Bot.getInstance();
sush1Bot.connect();
