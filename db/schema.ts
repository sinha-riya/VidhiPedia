import {  pgTable, serial, text } from "drizzle-orm/pg-core";

export const age = pgTable("age", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  imageSrc: text("image_src").notNull(),
});