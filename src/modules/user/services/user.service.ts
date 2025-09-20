import { NotFoundError } from '@fcjs/core';

type User = {
  id: number;
  name: string;
  email: string;
};

export class UserService {
  private users: User[] = [];
  private idCounter = 1;

  constructor() {
    // Seed with a sample user
    this.users.push({
      id: this.idCounter++,
      name: 'John Doe',
      email: 'W9k6o@example.com',
    });
  }

  public async getAllUsers(
    limit: number = 10,
    offset: number = 0,
  ): Promise<User[]> {
    return this.users.slice(offset, offset + limit);
  }

  public async getUserById(id: number): Promise<User> {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundError('User not found');
    return user;
  }

  public async createUser(userData: Omit<User, 'id'>): Promise<User> {
    const newUser: User = {
      id: this.idCounter++,
      ...userData,
    };
    this.users.push(newUser);
    return newUser;
  }

  public async deleteUser(id: number): Promise<boolean> {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) throw new NotFoundError('User not found');

    this.users.splice(index, 1);
    return true;
  }
}
