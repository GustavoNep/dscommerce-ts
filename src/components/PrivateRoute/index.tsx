import { Navigate } from "react-router-dom";
import * as authService from "../../services/auth-service";
import { RoleEnum } from "../../models/auth";

type Props = {
  children: JSX.Element[] | JSX.Element;
  roles?: RoleEnum[];
};

export function PrivateRoute({ children = []}: Props) {
  if (!authService.isAthenticated()) {
    return <Navigate to="/login" />;
  }

  if (!authService.isAthenticated()) {
    return <Navigate to="/catalog" />;
  }

  return children;
}
