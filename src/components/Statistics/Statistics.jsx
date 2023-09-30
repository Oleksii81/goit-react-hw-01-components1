import PropTypes from 'prop-types';
import {StatisticStyle} from './Statistics.styled';

export const Statistic = ({title, stats}) => (
    <StatisticStyle>
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
            {stats.map(data => (
                <li className="item" 
                    key={data.id}
                    >
                    <span className="label">{data.label}</span>
                    <span className="percentage">{data.percentage}%</span>
                </li>
            ))}
        </ul>
    </StatisticStyle>
);


Statistic.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
};