import React from "react";

const ProfileLectureCard = ({ lectures }) => {
  console.log("ProfileLecture");
  console.log(lectures);
  return (
    <>
      {lectures &&
        lectures.map((item) => {
          <Image
            source="https://firebasestorage.googleapis.com/v0/b/rn-chat-fb183.appspot.com/o/icon.png?alt=media"
            style={{ width: 130, height: 130, marginTop: 20 }}
          />;
        })}
    </>
  );
};

export default ProfileLectureCard;
