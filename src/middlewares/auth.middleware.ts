import { UnauthorizedError } from '@fcjs/core';
import { Request, Response, NextFunction } from 'express';

export class authMiddleware {
  public headerKey = 'Authorization';

  public description = 'Bearer <token>';

  public handler(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];

    // Check format: "Bearer <token>"
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedError('Missing or invalid Authorization header');
    }

    const token = authHeader.split(' ')[1];

    // Dummy token check for now
    if (token !== 'success') {
      throw new UnauthorizedError('Invalid token');
    }

    next();
  }
}
