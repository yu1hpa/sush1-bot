import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Member {
  @PrimaryColumn("bigint", { nullable: false })
  public user_id: number;

  @Column("text", { nullable: true })
  public username: string;

  @Column({ type: "int" })
  public user_level: number = 0;

  @Column({ type: "int" })
  public points_sum: number = 0;

  constructor(user_id: number, username: string) {
    this.user_id = user_id;
    this.username = username;
  }
}
