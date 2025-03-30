import express, { Router } from "express";
import swaggerUI from "swagger-ui-express";
import swaggerDocs from "./swagger.documentation";

const routerSwaggerDocs : Router = express.Router();

routerSwaggerDocs.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs))

export default routerSwaggerDocs;