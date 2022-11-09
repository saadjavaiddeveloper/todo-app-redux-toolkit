import { useState } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import { Table,Button,Input } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux'
import { clearData, deleteData, editData, updateData } from './counter/counterSlice';
import './App.css';
function App() {
  // const [data,setData] =useState([])
  const [task,setTask] =useState()
  const [edit,setEdit]=useState()
  const navigation=useNavigate()
  const data = useSelector(state => state.counter.data)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick={()=>{navigation("/About")}}>About</button>
      <div>
  <Input value={task} onChange={(e)=>{setTask(e.target.value)}}
  />
</div>
<Button onClick={()=>{
  dispatch(updateData(task))
    // setData([...data,task]);
    setTask("");
  }} color="success">
      Click Me
    </Button>
    <button onClick={()=>{
      dispatch(clearData())
    }}>Clear</button>
      <Table dark>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        Username
      </th>
      <th>
       Edit
      </th>
      <th>
        Delete
      </th>
    </tr>
  </thead>
  <tbody>
    {data.map((item,index)=>{
      return( <tr>
        <th scope="row">
          {index+1}
        </th>
        <td>
        {edit===index?
        <input onChange={(e)=>{
          dispatch(editData({index:index,text:e.target.value}))
        // setData([...data])
        }} value={item}/>:item}
        </td>
        <td>
        <Button onClick={()=>{
          edit===index? setEdit(""):
        setEdit(index)
        }} color="primary">
      {edit===index?"save":"edit"}
    </Button>    
        </td>
        <td>
        <Button onClick={()=>{
          dispatch(deleteData(index))
          // data.splice(index,1);
          // setData([...data]);
        }} color="danger">
      Delete
    </Button>
        </td>
      </tr>)
    })}
   
   
  </tbody>
</Table>
    </div>
  );
}

export default App;
