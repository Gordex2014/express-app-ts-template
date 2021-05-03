import express, { Application } from "express";
import "colors";

import { config } from "../config/config";

class Server {
  private app: Application;
  private port: string;
  private apiPaths: Record<string, unknown>;

  constructor() {
    this.app = express();
    this.port = config.port;
    this.apiPaths = {};
  }

  async dbConnect(): Promise<void> {}

  middlewares(): void {
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes(): void {}

  listen(): void {
    this.app.listen(this.port, () => {
      console.log(`${"[Server]".blue}: Running on port ${this.port}`);
    });
  }
}

export default Server;
