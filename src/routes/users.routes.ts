import { Router } from "express";

import createUserController from "../controllers/users/createUsers.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import readUserProfileController from "../controllers/users/readUserProfile.controller";
import readUsersController from "../controllers/users/readUsers.controller";
import updateUserController from "../controllers/users/updateUser.controller";

const routes = Router();

routes.post("", createUserController);
routes.get("", readUsersController);
routes.get("/:id", readUserProfileController);
routes.patch("/:id", updateUserController);
routes.delete("/:id", deleteUserController);

export default routes;
