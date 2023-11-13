import styles from './UserCard.module.scss';
import { LocalGithubUser } from 'types';
import UserStat from 'components/UserStat/UserStat';
import UserTitle from 'components/UserTitle/UserTitle';
import UserInfo from 'components/UserInfo/UserInfo';

interface UserCardProps extends LocalGithubUser {}

const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <img
      src={props.avatar}
      alt={props.login}
      className={styles.avatar}
    />
    <UserTitle 
      created={props.created}
      name={props.name}
      login={props.login}
    />
    <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
      {props.bio || 'This profile has no bio'}
    </p>
    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
    />
    <UserInfo 
      blog={props.blog}
      company={props.company}
      location={props.location}
      twitter={props.twitter}
    />
  </div>
);

export default UserCard;
