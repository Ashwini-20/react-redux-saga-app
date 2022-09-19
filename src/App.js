import './App.css';
import { getUserData, setUserData } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import DisplayUsers from './components/displayUsers';


function App() {
  
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  console.log(user)

  const handleClick=()=>{
      dispatch(getUserData())
      
  }

  return (
    <div className="App">
      <h3 className='text-primary'>Display User Data</h3><br></br>
      <button className='btn btn-success' onClick={handleClick}>Get Data</button>
      <br></br><br></br>
      <div> 
      {user && <DisplayUsers users={user}/>}
      </div>
    </div>
  );
}

export default App;
