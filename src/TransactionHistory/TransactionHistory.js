import PropTypes from "prop-types";
import {
  StyledHead,
  StyledTable,
  StyledTbody,
  StyledTd,
  StyledTh,
  StyledTr,
} from "./TransactionHistory.styled";

export const TransactionHistory = ({ items }) => {
  return (
    <StyledTable>
      <StyledHead>
        <StyledTr>
          <StyledTh>Type</StyledTh>
          <StyledTh>Amount</StyledTh>
          <StyledTh>Currency</StyledTh>
        </StyledTr>
      </StyledHead>
      <StyledTbody>
        {items.map(({ type, amount, currency }, index) => (
          <StyledTr key={index}>
            <StyledTd>{type}</StyledTd>
            <StyledTd>{amount}</StyledTd>
            <StyledTd>{currency}</StyledTd>
          </StyledTr>
        ))}
      </StyledTbody>
    </StyledTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
