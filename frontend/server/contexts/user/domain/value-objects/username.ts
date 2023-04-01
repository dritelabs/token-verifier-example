export interface Username {
  value: string;
}

export function defineUsername(value: string): Username {
  if (!validate(value)) {
    throw new Error("Invalid username");
  }

  return {
    value,
  };
}

function validate(value: string) {
  const minLength = 6;

  return value.length >= minLength;
}
