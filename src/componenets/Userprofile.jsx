import React from "react";
import { useSession } from "next-auth/react";

const UserProfile = () => {
  const { data: session } = useSession();

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">User Profile</h2>
      {session ? (
        <p>Welcome, {session.user.name}!</p>
      ) : (
        <p>Please sign in to access your profile.</p>
      )}
    </div>
  );
};

export default UserProfile;
