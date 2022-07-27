import React from 'react';
import { useSelector } from 'react-redux';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  return (
    <div className="missions_container">
      <table>
        <tbody>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th />
          </tr>
          {missions &&  missions.map((mission) => (
          <tr key={mission.mission_id}>
            <td className="missionName">{mission.mission_name}</td>
            <td className="missionDescription">{mission.description}</td>
            <td className="userBadge"><label>NOT A MEMBER</label></td>
            <td className="joinButton">
              <button>
                Join Mission
              </button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Missions;
