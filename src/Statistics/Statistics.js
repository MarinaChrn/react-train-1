import PropTypes from "prop-types";
import {
  StatsItem,
  StatsLabel,
  StatsList,
  StatsPercentage,
  StatsSection,
  StatsTitle,
} from "./Statistic.styled";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const Statistics = ({ title, stats }) => {
  return (
    <StatsSection>
      <StatsTitle>{title}</StatsTitle>
      <StatsList>
        {stats.map((stat, index) => (
          <StatsItem key={index} bgColor={getRandomColor()}>
            <StatsLabel>{stat.label}</StatsLabel>
            <StatsPercentage>{stat.percentage}%</StatsPercentage>
          </StatsItem>
        ))}
      </StatsList>
    </StatsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
