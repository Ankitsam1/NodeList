import React,{useState} from 'react';
import ClockDisplay from './ClockDisplay';
export default function Nav() {
  const[ showabout, setshowabout] = useState(false);
  const handleClick = () => {
    setshowabout(true);
  };
  const handleClickout = (event) =>{
    if(event.target.id === "myabout"){
      setshowabout(false);
    }
  };
  const handleClose= () => {
    setshowabout(false);
  };
  return (
    <div className="aboutsection">
      <div className="clockdisplay">
        <ClockDisplay />
      </div>
      <div className="aboutmain">
        <button className="aboutbutton" onClick={handleClick}>
          About
        </button>
      </div>

      {showabout && (
        <div id="myabout" className="model" onClick={handleClickout}>
          <div className="aboutcontent">
            <span className="closeabout" onClick={handleClose}>
              {" "}
              &times;
            </span>
            <center>
              <h2> About </h2>{" "}
            </center>
            <br></br>
            <p>
              Welcome to LeafList, the ultimate ninja tool to supercharge
              your productivity and focus. In a world moving at the speed of a
              shinobi, maintaining a steady workflow can feel like a battle.
              <br></br>
              <br></br>
              LeafList is your secret jutsu for conquering office tasks,
              college assignments, or any mission that requires your undivided
              attention. We understand that the right environment is crucial for
              achieving peak productivity, just like a shinobi needs the right
              training grounds.
              <br></br>
              <br></br>
              With LeafList, you’ll have access to an arsenal of tools
              designed to create the perfect workspace. Immerse yourself in a
              chill, melodic atmosphere and keep your to-do list in clear sight
              to fend off distractions. Time management is essential for any
              ninja, so we’ve also included a timer feature to help you master
              your work sessions.
              <br></br>
              <br></br>
              Join the ranks of elite ninjas and experience the harmony of
              ambient music, task management, and disciplined work sessions with
              LeafList. Unleash your inner Hokage and dominate your tasks
              like never before!{" "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
