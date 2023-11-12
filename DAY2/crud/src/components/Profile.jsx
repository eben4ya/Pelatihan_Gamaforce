import React from "react";

const Profile = ({name = "", prodi = "", src=""}) => {
  return (
    <article>
      <img src={src} alt="" />
      <h1>{name}  </h1>
      <h5> {prodi} </h5>
    </article>
  );
};

export default Profile;
