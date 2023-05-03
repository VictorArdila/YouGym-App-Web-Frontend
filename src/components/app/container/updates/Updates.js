import React from "react";
import { UpdatesData } from "../../data/Data";
import { UpdateContainer, Update, Notification, Info } from "./UpdatesStyles.jsx";

const Updates = () => {
  return (
    <UpdateContainer>
      {UpdatesData.map((update, index) => {
        return (
          <Update key={index}>
            <img src={update.img} alt="profile" />
            <Notification>
              <Info style={{ marginBottom: "0.5rem" }}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </Info>
              <span>{update.time}</span>
            </Notification>
          </Update>
        );
      })}
    </UpdateContainer>
  );
};

export default Updates;
