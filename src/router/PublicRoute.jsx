import { memo } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PublicRoute = memo(({ children }) => {
  const {currentUser} = useSelector((state)=>state.authentication)
  return !currentUser.isLogin ? children : <Navigate to="/pokedex" />;
});
