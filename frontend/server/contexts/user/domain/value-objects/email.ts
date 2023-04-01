export interface Email {
  value: string;
}

export function defineEmail(value: string): Email {
  if (!validate(value)) {
    throw new Error("Invalid email address");
  }

  return {
    value: format(value),
  };
}

function validate(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function format(email: string): string {
  return email.trim().toLowerCase();
}
