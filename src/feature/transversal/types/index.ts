export enum Role {
    Administrator = 'Admin',
    
  }
  


export interface LoginCredential {
 email: string;
 password: string;
}

export interface AuthUser {
    userId: string
    email: string
    roleName: Role
    roleId: string
  }