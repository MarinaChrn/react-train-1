import {
  DescriptionContainer,
  ProfileContainer,
  ProfileImg,
  ProfileLocation,
  ProfileName,
  ProfileTag,
  StatsItem,
  StatsLabel,
  StatsList,
  StatsQuantity,
} from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <DescriptionContainer>
        <ProfileImg src={avatar} alt="User img" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </DescriptionContainer>
      <StatsList>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsItem>
      </StatsList>
    </ProfileContainer>
  );
};
