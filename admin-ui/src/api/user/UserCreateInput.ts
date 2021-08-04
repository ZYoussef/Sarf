export type UserCreateInput = {
  firstName?: string | null;
  lastName: string;
  password: string;
  roles: Array<string>;
  username: string;
};
