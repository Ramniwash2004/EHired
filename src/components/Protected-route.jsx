/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded, user } = useUser();
  const location = useLocation();

  if (!isLoaded) return null;

  // If not signed in → send to home
  if (!isSignedIn) {
    return <Navigate to="/" replace />;
  }

  // If signed in but no role → send to onboarding
  if (
    isSignedIn &&
    user &&
    !user.unsafeMetadata?.role &&
    location.pathname !== "/onboarding"
  ) {
    return <Navigate to="/onboarding" replace />;
  }

  return children;
};

export default ProtectedRoute;