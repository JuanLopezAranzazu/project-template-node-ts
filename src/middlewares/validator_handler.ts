import { Request, Response, NextFunction } from "express";
import Joi, { Schema } from "joi";

// Middleware para validar los datos de entrada de las rutas
const validatorHandler = (
  schema: Schema,
  property: "body" | "query" | "params"
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[property], { abortEarly: false });
    if (error) {
      res.status(400).json({
        error: error.details.map((detail) => detail.message),
      });
    } else {
      next();
    }
  };
};

export default validatorHandler;
