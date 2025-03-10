import { ROLE } from '../enums';
import { IUserSampleData } from '../interfaces';

export const USER_SAMPLE_DATA: IUserSampleData[] = [
  {
    name: 'Admin',
    role: ROLE.ADMIN,
    email: 'admin@admin.com',
    password: 'admin@admin.com',
  },
  {
    name: 'user',
    email: 'user@user.com',
    role: ROLE.USER,
    password: 'user@user.com',
  },
];
