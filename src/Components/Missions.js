import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { joinMission } from '../redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
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
            <td className={`userBadge ${mission.reserved ? 'member' : ' '}`}><label>
              {mission.reserved ? 'Active member' : 'NOT A MEMBER'}</label></td>
            <td className="joinButton">
              <button onClick={() => dispatch(joinMission(mission.mission_id))} className={`missionBtn ${mission.reserved ? 'joined' : ' '}`}>
              {mission.reserved ? 'Leave Mission' : 'Join Mission'}
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
