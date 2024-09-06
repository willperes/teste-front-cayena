import { z } from "zod";

export const SupplierDTO = z.object({
  publicId: z.string().uuid(),
  name: z.string(),
  cnpj: z.string().transform((value) => value.replace(/\W/g, "")),
  phoneNumber: z.string(),
  ownerName: z.string(),
});

export type ISupplierDTO = z.infer<typeof SupplierDTO>;
