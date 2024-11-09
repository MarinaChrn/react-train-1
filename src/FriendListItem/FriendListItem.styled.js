import styled from "styled-components";

export const ListItemStyled = styled.li`
  display: flex;
  gap: 15px;
  align-items: center;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  width: 100%;
  padding: 8px 20px;
`;

export const OnlineStyled = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: ${(props) => (props.$isOnline ? "green" : "lightgray")};
`;

export const AvatarStyled = styled.img`
  width: 60px;
`;

export const NameStyled = styled.p`
  font-weight: 600;
`;
