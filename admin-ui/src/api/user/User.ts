export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
