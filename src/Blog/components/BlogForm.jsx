import { useUser, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, isLoaded } = useUser();

  // Wait until Clerk loads user data
  if (!isLoaded) return <div>Loading...</div>;

  const isAdmin = user?.publicMetadata?.role === "admin";

  if (!isAdmin) {
    // redirect non-admins to home
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoute;
