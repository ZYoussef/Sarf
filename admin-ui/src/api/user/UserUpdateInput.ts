export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
