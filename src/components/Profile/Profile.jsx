import PropTypes from 'prop-types';
import {ProfileStyle} from './Profile.styled';
import defaultImage from '../Img/no-image.svg'

export const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  }) => (
    <ProfileStyle>
        <><div className="description">
                <img
                    src={avatar ? avatar : defaultImage}
                    alt={tag}
                    className="avatar" />
                <p className="name">{username}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
            </div><ul className="stats">
                    <li className='stats-items'>
                        <span className="label">Followers</span>
                        <span className="quantity">{followers}</span>
                    </li>
                    <li className='stats-items'>
                        <span className="label">Views</span>
                        <span className="quantity">{views}</span>
                    </li>
                    <li className='stats-items'>
                        <span className="label">Likes</span>
                        <span className="quantity">{likes}</span>
                    </li>
                </ul></>
    </ProfileStyle>
);


Profile.propTypes = {
    avatar: PropTypes.string,
    tag: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};