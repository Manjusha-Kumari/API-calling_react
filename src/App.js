
import './App.css';
import {} from './api/index'
import {useState, useEffect} from 'react';
import {getRandomUser, getPosts} from "./api/index"
import PostCard from './components/post_card';
import UserCard from './components/user_card';

function App() {
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getPosts().then(posts => setData(posts));
  }, []);

  useEffect(() => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  }, [])

  const refresh = () => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  }

  return (
    <div className='App'>
        {userData && <UserCard data={userData}/>}
        <button onClick={refresh}>Refresh user</button>
        {
          data ? data.map((e) => <PostCard title={e.title} body={e.body}/>) : <p>No Data Recived</p>
        }
    </div>
  );
}

export default App;
