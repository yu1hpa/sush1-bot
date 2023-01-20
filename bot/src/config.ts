import { DataSource } from "typeorm";
import { Member } from "./entities/member";

const datasource = new DataSource({
  type: "postgres",
  host: "db",
  database: "sush1-bot-db",
  username: "sush1",
  password: "posgre",
  logging: true,
  synchronize: false,
  port: 5432,
  entities: [Member],
});

export default async function getDataSource(): Promise<DataSource> {
  return datasource.initialize();
}
