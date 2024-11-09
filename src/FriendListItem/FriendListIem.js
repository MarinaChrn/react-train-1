import PropTypes from "prop-types";
import {
  AvatarStyled,
  ListItemStyled,
  NameStyled,
  OnlineStyled,
} from "./FriendListItem.styled";

export const FriendListItem = ({ friend }) => {
  return (
    <ListItemStyled>
      <OnlineStyled $isOnline={friend.isOnline}></OnlineStyled>
      <AvatarStyled src={friend.avatar} alt="Friend's photo"></AvatarStyled>
      <NameStyled>{friend.name}</NameStyled>
    </ListItemStyled>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
