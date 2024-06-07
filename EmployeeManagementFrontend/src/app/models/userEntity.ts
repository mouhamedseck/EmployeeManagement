import { Role } from './role';

export class UserEntity {
  id: number;
  username: string;
  password: string;
  // roles: Role[];

  constructor(id: number, username: string, password: string) {
    this.id = id;
    this.username = username;
    this.password = password;
    // this.roles = roles;
  }
}
