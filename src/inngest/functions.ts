// src/inngest/functions.ts
import { inngest } from "./client";

export const processTask = inngest.createFunction(
  { id: "process-task2", triggers: { event: "app/task.created" } },
  async ({ event, step }) => {
    const result = await step.run("handle-task", async () => {
      return { processed: true, id: event.data.id };
    });
    // downloading task
    await step.sleep("pause", "30s");
    // // normal task
    // await step.sleep("break", "10s");

    // // very long wait function
    // await step.sleep("BACK-FIRE", "60s");

    return { message: `Task ${event.data.id} complete`, result };
  },
);
