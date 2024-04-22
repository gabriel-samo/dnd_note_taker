import { User } from "../../model/User";
import { Query } from "../pool";

const find = (col: string, val: string) =>
  Query<User[]>("SELECT * FROM users WHERE ?? = ?;", [col, val]);

export default {
  find,
};
