import "dotenv/config";
import type { Config } from "drizzle-kit";

export const config: Config = {
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: "d1",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://vidhipedia_owner:Q4AlZyYwE1fg@ep-square-shape-a1xst6t4.ap-southeast-1.aws.neon.tech/vidhipedia?sslmode=require",
  },
}

export default config;