import PropTypes from 'prop-types';
import {online, offline} from '../FriendList/FriendList.styled';

export const FriendListItem = ({name, isOnline, avatar}) => {
    return (
        
        <li className="friend-list-item">
            <span className={`status ${isOnline ? online : offline}`}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
        )
    
    };


FriendListItem.propTypes ={
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }).isRequired
    ).isRequired,
};