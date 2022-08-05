// import BasketDisplay from './BasketDisplay';
import TeamsList from './TeamsList';
import GroupList from './GroupList';
import teams from '../teams';

export default function WCDraw2022() {
  return (
    <div className="wcdraw2022">
      <TeamsList teams={teams} />
      <GroupList teams={teams} />
    </div>
  );
}
