// import React, { useState, useEffect } from 'react';
// import './App.css';
// import { Login } from './components/login';

// const App = () => {
//   // state always goes directly under the declaration
//   // use is var name and setUser is the method are the value of useState
//   const [user, setUser] = useState('');
//   const [userName, setUsername] = useState();
//   const [arr, setArr] = useState([]);

//   useEffect(() => {
//     fetchReq();
//   }, []);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     setUsername(user);
//   };

//   const fetchReq = async () => {
//     const response = await fetch('https://picsum.photos/v2/list');
//     const data = await response.json();
//     setArr(data);
//   };

//   return (
//     <div className='App'>
//       <h1>{user}</h1>
//       {/* ? (if/else) && (just if) */}
//       {userName ? <h1>Welcome {userName}</h1> : <h1>Please log in</h1>}
//       {userName && <h2>Success</h2>}
//       <Login setter={setUser} handler={submitHandler} />
//       {arr.map((item, i) => {
//         return (
//           <div>
//             <p key={i}>{item}</p>;
//             <img
//               className='imageFunTime'
//               src={item.download_url}
//               alt='random'
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import { Login } from './components/login';

const App = () => {
  // state always goes directly under the declaration
  // use is var name and setUser is the method are the value of useState
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [arr, setArr] = useState([]);

  useEffect(() => {
    fetchReq();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    setUsername(user);
  };

  const fetchReq = async () => {
    const response = await fetch('https://picsum.photos/v2/list');
    const data = await response.json();
    setArr(data);
  };

  return (
    <div className='App'>
      <h1>{user}</h1>
      {/* ? (if/else) && (just if) */}
      {username ? <h1>Welcome {username}</h1> : <h1>Please log in</h1>}
      {username && <h2>Success</h2>}
      <Login setter={setUser} handler={submitHandler} />
      {arr.map((item, i) => {
        return (
          <div>
            <p key={i}>{item.author}</p>
            <img
              className='imageFunTime'
              src={item.download_url}
              alt='random'
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
