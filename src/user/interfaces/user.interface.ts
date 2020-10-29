export interface UserKey {
  id?: string;
}

export interface User extends UserKey {
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  phoneExt: string;
  phoneNo: string;
  password: string;
  status?: string;
}
