import { FriendListItem } from '../FriendListItem/FriendListItem';
import {FriendListStyle} from './FriendList.styled'

export const FriendList = ({ friends }) => {
  return (
    <FriendListStyle class="friendList">
      {friends.map(({ avatar, id, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </FriendListStyle>
  );
};


