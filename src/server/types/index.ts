import { UserTable } from "../model/UserTable";

declare global {
  namespace Express {
    export interface Request {
      currentUser?: UserTable;
    }
  }
}
