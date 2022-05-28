import updateUserService from "../../services/users/updateUser.service";
import { Request, Response } from "express";

const updateUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, password, age } = req.body;

    const user = await updateUserService({ id, name, email, password, age });

    return res.status(200).json({ message: "User updated" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(error.message === "User not found" ? 404 : 401).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default updateUserController;
