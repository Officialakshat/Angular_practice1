export interface UserData {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  isCheck?: boolean;   // 👈 fixed (boolean, not string)
}
