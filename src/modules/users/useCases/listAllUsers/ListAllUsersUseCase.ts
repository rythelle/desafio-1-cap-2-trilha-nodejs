import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User not exists");
    }

    if (user.admin === true) {
      const listUser = this.usersRepository.list();

      return listUser;
    }

    throw new Error("User isn't admin");
  }
}

export { ListAllUsersUseCase };
