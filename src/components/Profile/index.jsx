import React from "react";

import "./styles.scss";

const Divider = () => <>&nbsp;&nbsp;|&nbsp;&nbsp;</>;

const Profile = ({ name, title, phone, email, address }) => {
  return (
    <div className="block profile-block">
      <div className="text">
        <h1>{name}</h1>
        <div>
          {title}
          <Divider />
          {address}
          <Divider />
          <a href={`tel:${phone}`}>{phone}</a>
          <Divider />
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
