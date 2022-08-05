import { useEffect, useRef, useState } from 'react';
import Group from './Group';

/*
2x UEFA in one group allowed
1x CONCACAF in one group allowed
1x CONMEBOL in one group allowed
1x AFC in one group allowed
1x CAF in one group allowed

Only one team from the same pot

*/
export default function GroupList({ teams }) {
  const _teams = useRef(teams);

  const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const [selectedTeams, setSelectedTeams] = useState();

  useEffect(() => {
    const _selectedTeams = [];
    const homeTeamIndex = _teams.current.findIndex(
      (item) => item.country === 'Qatar'
    );

    for (let i = 0; i < 8; i++) {
      _selectedTeams.push({ 0: null, 1: null, 2: null, 3: null });
    }

    _selectedTeams[0][0] = _teams.current[homeTeamIndex];
    _teams.current.splice(homeTeamIndex, 1);

    setSelectedTeams(_selectedTeams);
  }, []);

  const validateTeam = (groupTeams, team) => {
    const teams = Object.values(groupTeams);
    let allowedNumberOfConfTeams = 1;

    if (team.conf === 'uefa') {
      allowedNumberOfConfTeams = 2;
    }

    const numberOfTeams = teams.filter((_team) => {
      if (_team) {
        // team is not null
        return _team.conf === team.conf;
      }
    }).length;

    const potExistsInGroup = teams.some((_team) => {
      if (_team) {
        return _team.pot === team.pot;
      }
    });

    return numberOfTeams < allowedNumberOfConfTeams && !potExistsInGroup;
  };

  const drawTeam = (groupIndex, groupTeamIndex) => {
    let isValid = false;
    let team = null;
    let randomIndex = 0;

    while (!isValid) {
      randomIndex = Math.floor(Math.random() * _teams.current.length);
      team = _teams.current[randomIndex];
      console.log('Trying...', groups[groupIndex], team);

      isValid = validateTeam(selectedTeams[groupIndex], team);
    }

    if (!isValid) {
      return;
    }
    const _selectedTeams = selectedTeams;
    _selectedTeams[groupIndex][groupTeamIndex] = team;

    _teams.current.splice(randomIndex, 1);

    setSelectedTeams({ ...selectedTeams });
  };

  return (
    <div className='group-container'>
    <h2>Groups ⚽</h2>
    <div className='groups-list'>
      {selectedTeams &&
        groups.map((letter, index) => (
          <Group
            key={letter}
            title={`Group ${letter}`}
            index={index}
            teams={selectedTeams[index]}
            onSelect={(_index) => {
              console.log('select');
              drawTeam(index, _index);
            }}
          />
        ))}
    </div>
    <div className='reset-draw-button'>
    <button className="reset" onClick={() => window.location.reload(false)}>Reset Draw!</button>
    </div>
    </div>
    
  );
}
