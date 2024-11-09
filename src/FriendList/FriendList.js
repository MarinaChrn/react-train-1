import PropTypes from "prop-types";
import { FriendListItem } from "../FriendListItem/FriendListIem";
import { FriendListStyled } from "./FriendList.styled";

export const FriendList = ({ friends }) => {
  return (
    <FriendListStyled>
      {friends.map((friend, index) => (
        <FriendListItem key={index} friend={friend}></FriendListItem>
      ))}
    </FriendListStyled>
  );
};

FriendList.propType = {
  friends: PropTypes.object.isRequired,
};
