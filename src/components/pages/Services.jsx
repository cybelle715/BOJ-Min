import React from "react";
import "./Services.css";
import users from "../../assets/users.svg";

export const Services = () => {
  return (
    <>
      <h1>Services</h1>
      <div className="buttons">
        <ol>
          <li><button className="b1">Team</button></li>
          <li><button><img src={users} alt="" />Team</button></li>
          <li><button>Team</button></li>
          <li><button>Team</button></li>
          <li><button>Team</button></li>
          <li><button>Team</button></li>
          <li><button>Team</button></li>
        </ol>
      </div>
   
    </>
  );
};
