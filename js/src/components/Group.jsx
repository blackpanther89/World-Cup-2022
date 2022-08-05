import Button from './Button';

/**
 * teams
 * {
 *    0: null,
 *    1: null,
 *    2: null,
 *    3: null
 * }
 *
 *
 */

export default function Group({ title, onSelect, teams }) {
  const renderTeam = (team, index) => {
    {
      if (team) {
        return <div className='team scale-up-center'><div className='group-flag'> {team.flag} </div>
         <div className='group-country'> {team.country} </div> </div> ;
      } else {
        return <Button onClick={() => onSelect(index)} />;
      }
    }
  };

  return (
    <div className='group'>
      <h4>{title}</h4>
      {Object.keys(teams).map((index) => (
        <div key={`team-${index}`}>{renderTeam(teams[index], index)}</div>
      ))}
    </div>
  );
  
}
