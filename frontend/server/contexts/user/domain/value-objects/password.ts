export interface Password {
  value: string;
}

export function definePassword(value: string): Password {
  if (!validate(value)) {
    throw new Error("Invalid password");
  }

  return {
    value,
  };
}

function validate(value: string) {
  const minLength = 6;

  return value.length >= minLength;
}
