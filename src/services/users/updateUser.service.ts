import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/users";
import bcrypt from "bcrypt";

const updateUserService = async ({
  id,
  name,
  email,
  password,
  age,
}: IUserUpdate) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const account = users.find((user) => user.id === id);

  if (!account) {
    throw new Error("User not found");
  }

  if (name === undefined) {
    name = account.name;
  }

  if (email === undefined) {
    email = account.email;
  }

  if (password === undefined) {
    password = account.password;
  }

  if (age === undefined) {
    age = account.age;
  }

  if (bcrypt.compareSync(password, account!.password)) {
    throw new Error("Inform a different password");
  }

  const newUser = {
    name,
    email,
    password: bcrypt.hashSync(password, 10),
    age,
    updated_at: new Date(),
  };

  await userRepository.update(account!.id, newUser);

  return "";
};

export default updateUserService;
