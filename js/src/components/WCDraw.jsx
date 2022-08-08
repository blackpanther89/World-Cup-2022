import TeamsList from './TeamsList';
import GroupList from './GroupList';
import teams from '../teams';
import Rules from './Rules';

export default function WCDraw2022() {
  return (
    <div className="wcdraw2022">
      <Rules />
      <TeamsList teams={teams} />
      <GroupList teams={teams} />

    </div>
  );
}
