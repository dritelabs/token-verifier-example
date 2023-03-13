export interface User {
  id?: string;
  email?: string;
  password?: string;
  profile?: Partial<Profile>;
}
