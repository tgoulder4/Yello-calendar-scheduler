import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export default class Post {
  @PrimaryKey()
  id!: number;

  @Property()
  date: Date = new Date();

  //if you give it props (in an object), it'll go through those props one by one and
  //execute the function.
  //onUpdate is a function that mORM Looks for each time property() is called, and if
  //the function exists in the props object then it runs
  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  title!: string;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }
}
