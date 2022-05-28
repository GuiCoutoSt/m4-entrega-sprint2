import deleteUserService from "../../services/users/deleteUser.service";
import { Request, Response } from "express";

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await deleteUserService(id);

    return res.status(200).json({ message: "User deleted" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default deleteUserController;
