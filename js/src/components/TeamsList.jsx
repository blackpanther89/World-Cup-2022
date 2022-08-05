import Pot from './Pot';

export default function TeamsList({ teams }) {
  const pot1Teams = teams.filter((item) => item.pot === 1);
  const pot2Teams = teams.filter((item) => item.pot === 2);
  const pot3Teams = teams.filter((item) => item.pot === 3);
  const pot4Teams = teams.filter((item) => item.pot === 4);
  return (
    <div className="pots">
      <Pot countries={pot1Teams} title="Pot 1" />
      <Pot countries={pot2Teams} title="Pot 2" />
      <Pot countries={pot3Teams} title="Pot 3" />
      <Pot countries={pot4Teams} title="Pot 4" />
    </div>
  );
}
