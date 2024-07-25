import Joi from "joi";

// Definir los esquemas de validación para los datos de usuario
const id = Joi.number().integer().positive();
const username = Joi.string().min(3);
const email = Joi.string().email();
const password = Joi.string().min(6);
const name = Joi.string().min(3);

const createUserSchema = Joi.object({
  username: username.required(),
  email: email.required(),
  password: password.required(),
  name: name.required(),
});

const updateUserSchema = Joi.object({
  username: username,
  email: email,
  password: password,
  name: name,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

export { createUserSchema, updateUserSchema, getUserSchema };
