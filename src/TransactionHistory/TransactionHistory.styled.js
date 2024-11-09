import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  max-width: 600px;
  border-collapse: collapse;
  margin: 40px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  align-items: center;
  text-align: center;
`;

export const StyledHead = styled.thead`
  background-color: #4ac1d0;
  color: #ffffff;
  font-weight: bold;
`;

export const StyledTr = styled.tr`
  &:nth-child(even) {
    background-color: #f8f8f8;
  }
`;

export const StyledTh = styled.th`
  padding: 12px 16px;
  text-align: center;
  border: 1px solid #e1e1e1;
`;

export const StyledTd = styled.td`
  padding: 12px 16px;
  text-align: center;
  border: 1px solid #e1e1e1;
`;

export const StyledTbody = styled.tbody``;
