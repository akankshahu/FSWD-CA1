import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'
import TeamMemberCard from './components/TeamMemberCard';

const users=[{id:1, name:"John Doe",title:"Software Engineer"},
  {id:2,name:"Shubham mehta" ,title:"Civil Engineer"},
  {id:3,name:"Subhash bose",title:"Mechanical Engineer"}


]
function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <div>
          {users.map(user=>(
            <TeamMemberCard key={user.id} user={user} />

          ))}
        </div>
      }/>
      

    </Routes>
    
    </BrowserRouter>
  )
}

export default App;
