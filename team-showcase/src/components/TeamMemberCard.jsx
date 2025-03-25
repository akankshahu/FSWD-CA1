import React from 'react';
function TeamMemberCard({user}){
    return (
        <div>
            <h1>Team member's name:{user.name}</h1>
            <p> Job title:{user.title}</p>
        </div>
    );
};
export default TeamMemberCard;