import PropTypes from 'prop-types';
import {FriendListStyle, online, offline} from './FriendList.styled';


export const FriendList = ({friends}) => (
    <FriendListStyle className='friend-list'>
        {friends.map(({id, name, isOnline, avatar}) => (
        <li key={id} className="friend-list-item">
            <span className={`status ${isOnline ? online : offline}`}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
        ))}
    </FriendListStyle>
);


FriendList.propTypes ={
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }).isRequired
    ).isRequired,
};