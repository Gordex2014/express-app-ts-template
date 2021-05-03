import express, { Application } from "express";
import "colors";

import { config } from "../config/config";

class Server {
  private app: Application;
  private port: string;
  // private apiPaths: {
  //   randomRoute: "/route"
  // };

  constructor() {
    this.app = express();
    this.port = config.port;

    this.middlewares();
    this.routes();
  }

  async dbConnect(): Promise<void> {}

  middlewares(): void {
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes(): void {
    // this.app.use(this.apiPaths.randomRoute, randomRouter)
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log(`${"[Server]".blue}: Running on port ${this.port}`);
    });
  }
}

export default Server;
