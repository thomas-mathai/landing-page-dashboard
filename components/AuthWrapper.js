import { useEffect } from "react";
import { useRouter } from "next/router";

const AuthWrapper = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const authenticated = localStorage.getItem("authenticated");
    if (!authenticated) {
      router.push("/");
    }
  }, [router]);

  return <>{children}</>;
};

export default AuthWrapper;
