import express from 'express';
import { Routes } from './routes/index.js';
import { Logger } from '@fcjs/core';

export class Server {
  private app = express();

  public async startServer() {
    this.app.use(express.json());

    const ROUTES = new Routes(this.app);
    await ROUTES.registerRoutes();

    const PORT = process.env.PORT || 3000;
    const httpServer = this.app.listen(PORT, () => {
      Logger.log(
        'Server',
        `FCJs Server url: ${Logger.colorLog(`http://localhost:${PORT}`, 'cyan')}`,
      );
      Logger.log(
        'Docs',
        `${Logger.colorLog(`http://localhost:${PORT}/docs`, 'cyan')}`,
      );
    });

    this.app.on('error', (err) => {
      console.error('Server error', err);
    });

    await ROUTES.registerWsRoutes(httpServer);
  }
}
