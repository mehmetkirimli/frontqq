import React from "react";
import { useParams } from "react-router";

function Profile() {
  const { profileId } = useParams();
  return (
    <div>
      <p>PROFILE PAGE - PP {profileId}</p>
    </div>
  );
}

export default Profile;
