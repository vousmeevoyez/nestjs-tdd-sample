export interface IUser {
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  phoneExt: string;
  phoneNo: string;
  password: string;
  status?: string;
  generateHashPassword(): Promise<string>;
  checkPassword(password: string): Promise<boolean>;
}
