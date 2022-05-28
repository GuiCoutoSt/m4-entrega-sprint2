import readUsersService from "../../services/users/readUsers.service";
import { Request, Response } from "express";

const readUsersController = async (req: Request, res: Response) => {
  try {
    const users = await readUsersService();

    return res.status(200).json(users);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(401).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default readUsersController;
