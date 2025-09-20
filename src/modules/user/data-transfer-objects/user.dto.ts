import 'zod-openapi/extend';
import { z } from 'zod';

export const getUserDto = z
  .object({
    id: z.number(),
    name: z.string(),
  })
  .openapi({
    description: 'User Data',
    example: {
      id: 1,
      name: 'John Doe',
    },
  });

export const getAllUsersResponseDto = z.array(getUserDto).openapi({
  description: 'List of users',
});
export const getAllUsersQueryDto = z.object({
  limit: z.string().default('10').transform(Number),
  offset: z.string().default('0').transform(Number),
});

export const createUserDto = z
  .object({
    name: z.string().min(1),
    email: z.string().email(),
  })
  .openapi({
    description: 'Create user body',
    example: {
      name: 'eg_user',
      email: 'user@example.com',
    },
  });
