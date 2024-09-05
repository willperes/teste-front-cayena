import { z } from "zod";

export const SubmitLogInDTO = z.object({
  username: z.string(),
  password: z.string(),
  grant_type: z.literal("password"),
  scope: z.literal("web"),
});

export type ISubmitLogInDTO = z.infer<typeof SubmitLogInDTO>;
