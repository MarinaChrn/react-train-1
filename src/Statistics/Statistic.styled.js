import styled from "styled-components";

export const StatsSection = styled.section`
  width: 300px;
  margin: 40px 0 0 20px;
  border: 1px solid #f1f1f1;
`;

export const StatsTitle = styled.h2``;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 0px;
  margin: 0;
  margin-top: 20px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.$bgColor};
  width: calc(100% / 5);
  padding: 10px 0;
`;

export const StatsLabel = styled.span``;

export const StatsPercentage = styled.span`
  font-weight: 600;
`;
