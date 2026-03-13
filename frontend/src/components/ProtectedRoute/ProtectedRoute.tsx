import type { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "../../store/store";

const ProtectedRoute = ({ children }: {children: ReactNode}) => {
  const token = useSelector((state: RootState) => state.auth);
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};
export default ProtectedRoute;
