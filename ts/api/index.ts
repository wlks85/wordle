import { Application } from "express";
import routes from "./routes";

export default (app: Application) => {
    app.use("/api", routes);
}
