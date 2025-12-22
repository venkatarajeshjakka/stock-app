import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "too-slow-stock-app",
  ai: { gemini: { apiKey: process.env.GEMINI_API_KEY } },
});
