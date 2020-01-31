import React, {useState} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

function App() {

  const [user, setUser] = useState([
    {
      userName: 'Maxx'
    },
    {
      userName: 'Minn'
    },
    {
      userName: 'Mediumm'
    }
  ]);

  const setNewUserName = (event) => {
    setUser([
      {
        userName: 'Maxx'
      },
      {
        userName: event.target.value
      },
      {
        userName: 'Mediumm'
      }
    ])
  };

  // const setNewUserName = () => {
  //   setUser([
  //     {
  //       userName: 'Maxx'
  //     },
  //     {
  //       userName: 'Hugeeee'
  //     },
  //     {
  //       userName: 'Mediumm'
  //     }
  //   ])
  // };

  return (
    <div className="App">
      <br></br>
      <br></br>
      <UserInput change={setNewUserName}/>
      <br></br>
      <br></br>
      <UserOutput userName={user[0].userName}/>
      <br></br>
      <UserOutput userName={user[1].userName }/>
      <br></br>
      <UserOutput userName={user[2].userName}/>
      <br></br>
    </div>
  );
}

export default App;
