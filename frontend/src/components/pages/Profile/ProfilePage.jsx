import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import LoginSignup from "../LoginSignup";

const ProfilePage = () => {
  const { isAuth, user } = useContext(AuthContext);

  if (!isAuth) {
    return <LoginSignup />;
  }

  if (isAuth === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-900 text-white">
        Loading profile...
      </div>
    );
  }

  // if Login hai → Profile info
  return (
    <section className="min-h-screen flex items-center justify-center bg-zinc-900">
      <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 w-[360px] text-white shadow-xl">
        <h1 className="text-2xl font-bold mb-4 text-center">👤 Profile</h1>

        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-400">Username</p>
            <p className="font-medium">{user?.username || "N/A"}</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Email</p>
            <p className="font-medium">{user?.email}</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Login Provider</p>
            <p className="font-medium capitalize">
              {user?.provider || "local"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
