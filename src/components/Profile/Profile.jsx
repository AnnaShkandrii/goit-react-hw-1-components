import PropTypes from 'prop-types';
import css from './profile.module.css';

export const Profile = ({
  user: { username, tag, location, avatar,
    status: { followers, views, likes }
  },
  }) => {
  return (
    <div className={css.profile}>
    <div className={css.description}>
    <img
      src={avatar}
      alt={username}
      className={css.avatar}
    />
    <p className={css.username}>{username}</p>
    <p className={css.tag}>&#64;{tag}</p>
    <p className={css.location}>{location}</p>
      </div>
      
    <ul className={css.stats}>
    <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
          <span className={css.quantity}>{ views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
          <span className={css.quantity}>{ likes}</span>
    </li>
  </ul>
      </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
  }).isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
}