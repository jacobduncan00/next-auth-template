import z from "zod";

const envSchema = z.object({
    DATABASE_URL: z.string(),
    GITHUB_ID: z.string(),
    GITHUB_SECRET: z.string(),
    NEXTAUTH_SECRET: z.string(),
    NEXTAUTH_URL: z.string()
});

export const ENV = envSchema.parse(process.env);