import { UserTable } from "../../model/UserTable";
import { Query } from "../pool";

const find = (col: string, val: string) =>
  Query<UserTable[]>("SELECT * FROM users WHERE ?? = ?;", [col, val]);

export default {
  find,
};
