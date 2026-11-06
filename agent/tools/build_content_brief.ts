import { defineTool } from "eve/tools";
import { z } from "zod";

export default defineTool({
  description:
    "Turn a creator's topic into a practical content brief with a hook, key points, call to action, and production notes.",
  inputSchema: z.object({
    topic: z.string().min(2).describe("The content topic or rough idea."),
    audience: z.string().min(2).describe("Who the content is intended to help or reach."),
    platform: z.string().min(2).describe("The intended platform or channel."),
    goal: z
      .string()
      .min(2)
      .describe("The intended outcome, such as educate, encourage, entertain, or invite action."),
    tone: z.string().optional().describe("Optional voice or tone."),
  }),
  async execute({ topic, audience, platform, goal, tone }) {
    return {
      topic,
      audience,
      platform,
      goal,
      tone: tone ?? "clear, engaging, and authentic",
      suggestedHook: `A useful question or surprising insight about ${topic}`,
      keyPoints: [
        "Open with the audience's problem, question, or aspiration.",
        `Share one practical insight about ${topic}.`,
        "Give a concrete example or a small action the audience can try.",
        "Close with one relevant call to action.",
      ],
      callToAction:
        "Invite the audience to respond, save, share, or take one relevant next step.",
      productionNotes: [
        "Keep one central message rather than several competing ideas.",
        "Adapt length and format to the selected platform.",
        "Check facts, claims, and links before publishing.",
      ],
    };
  },
});
