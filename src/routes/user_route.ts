import express from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user_controller";
import {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
} from "../schemas/user_schema";
import validatorHandler from "../middlewares/validator_handler";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", validatorHandler(getUserSchema, "params"), getUser);
router.post("/", validatorHandler(createUserSchema, "body"), createUser);
router.put(
  "/:id",
  validatorHandler(getUserSchema, "params"),
  validatorHandler(updateUserSchema, "body"),
  updateUser
);
router.delete("/:id", validatorHandler(getUserSchema, "params"), deleteUser);

export default router;
