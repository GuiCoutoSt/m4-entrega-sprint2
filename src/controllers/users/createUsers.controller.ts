import { Request, Response } from "express";
import createUserService from "../../services/users/createUsers.service";

const createUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, age } = req.body;

    const user = await createUserService({ name, email, password, age });

    return res.status(201).json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(401).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default createUserController;
