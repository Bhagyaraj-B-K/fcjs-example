import { Application } from 'express';
import fg from 'fast-glob';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { Server as HttpServer } from 'http';

// import UserController from '../modules/user/user.controller.js';

import { apiReference } from '@scalar/express-api-reference';
import { loadRoutes, loadWsRoutes, OpenApiDoc } from '@fcjs/core';

export class Routes {
  constructor(private readonly app: Application) {
    app
      .use('/docs', apiReference({ theme: 'bluePlanet', url: '/openapi.json' }))
      .get('/openapi.json', (_req, res) => {
        res.json(new OpenApiDoc('My FCJs API Doc'));
      });
  }

  public async registerRoutes() {
    loadRoutes(this.app, await this.getControllers());

    // or load controllers manually
    // loadRoutes(this.app, [UserController]);
  }

  public async registerWsRoutes(server: HttpServer) {
    loadWsRoutes(server, await this.getControllers('ws-controller'));
  }

  public async getControllers(
    type: 'controller' | 'ws-controller' = 'controller',
  ) {
    const currentExt = path.extname(fileURLToPath(import.meta.url)); // .ts in dev, .js in build
    const pattern = `./**/*.${type}${currentExt}`;
    const controllerFiles = fg.sync(pattern);

    const controllers = await Promise.all(
      controllerFiles.map(async (file) => {
        const absolutePath = path.resolve(file);
        const module = await import(pathToFileURL(absolutePath).href);
        return module.default;
      }),
    );

    return controllers.filter(Boolean);
  }
}
