import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "24/7 Mentor", // Unique app ID
  name: "MentorAI",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});