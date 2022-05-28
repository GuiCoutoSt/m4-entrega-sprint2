import readUserProfileService from "../../services/users/readUserProfile.service";
import { Request, Response } from "express";

const readUserProfileController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await readUserProfileService(id);

    return res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default readUserProfileController;
