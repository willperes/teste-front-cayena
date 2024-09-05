import { FormErrorMessages } from "@/utils";
import { z } from "zod";

export const LogInFormModel = z.object({
  username: z
    .string({ required_error: FormErrorMessages.required })
    .min(1, FormErrorMessages.required),
  password: z
    .string({ required_error: FormErrorMessages.required })
    .min(1, FormErrorMessages.required),
});

export type ILogInFormModel = z.infer<typeof LogInFormModel>;
