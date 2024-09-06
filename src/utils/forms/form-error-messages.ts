function _formatLengthMessage(type: "min" | "max", length: number): string {
  const characterString = length === 1 ? "character" : "characters";
  const baseString = `This field must contain {{type}} ${length} ${characterString}.`;

  switch (type) {
    case "max":
      return baseString.replace("{{type}}", "a maximum of");
    case "min":
      return baseString.replace("{{type}}", "at least");
  }
}

export const FormErrorMessages = {
  required: "This field is required",
  invalidCnpj: "Insert a valid CNPJ",
  invalidPhoneNumber: "Insert a valida phone number",
  invalidEmail: "Insert a valid e-mail",
  invalidAddressState: "Insert a valid state",
  invalidZipCode: "Insert a valid Zip Code",
  minLength: (len: number) => _formatLengthMessage("min", len),
  maxLength: (len: number) => _formatLengthMessage("max", len),
};
