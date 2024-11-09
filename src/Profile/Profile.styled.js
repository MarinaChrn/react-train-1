import { styled } from "styled-components";

export const ProfileContainer = styled.div`
  margin: 20px;
  width: 280px;
  border: 1px solid #f1f1f1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
`;

export const DescriptionContainer = styled.div`
  padding: 30px 0 10px 0;
`;

export const ProfileImg = styled.img`
  width: 70px;
`;

export const ProfileName = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 8px;
`;

export const ProfileLocation = styled.p`
  color: #989898;
  margin: 5px;
  font-size: 14px;
`;

export const ProfileTag = styled.p`
  color: #989898;
  font-size: 14px;
  margin: 5px;
`;

export const StatsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 20px;
  background-color: #f1f1f1;
  width: 100%;
  display: flex;
  border-top: 1px solid #e7e7e7;
  border-radius: 0 0 6px 6px; /* Rounded bottom corners */
`;

export const StatsItem = styled.li`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  border-right: 1px solid #e7e7e7;

  &:last-child {
    border-right: none; /* Remove border on the last item */
  }
`;

export const StatsLabel = styled.span`
  font-size: 12px;
  color: #989898;
`;

export const StatsQuantity = styled.span`
  font-weight: 600;
  font-size: 14px;
  margin-top: 5px;
`;
