export interface Profile {
  givenName?: string;
  middleName?: string;
}

export function create(input: Profile) {
  return input;
}
