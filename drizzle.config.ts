import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL_NON_POOLING ?? env.POSTGRES_URL,
  },
  tablesFilter: ["8slp_*"], // also in schema.ts
} satisfies Config;
