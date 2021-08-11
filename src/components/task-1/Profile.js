import Description from "./Description";
import StatsList from "./StatsList";

const Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <div className="profile">
      <Description avatar={avatar} name={name} tag={tag} location={location} />
      <StatsList stats={stats} />
    </div>
  );
};

export default Profile;
