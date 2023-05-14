import "./App.css";
import Header from "./components/Header";
import { TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
function App() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [data, setdata] = useState([])
  const addData = () =>{
    setdata([...data,{name, email}])
    setname("");
    setemail("");
  };
  const removeItem = (index) =>{
    let arr = data;
    arr.splice(index,1);
    setdata([...arr]);
  }
  return (
    <div className="App">
      <Header />
      {/* Form section starts here */}
      <div className="form">
        <Stack spacing={4} direction="row">
          <TextField
            value={name}
            onChange = {(event)=> setname(event.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange = {(event)=> setemail(event.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button onClick={addData} variant="contained" color="success">
            Add
          </Button>
        </Stack>
      </div>
      {/* Form Section Ends here */}
      {/* Data section starts here */}
      <div className="data">
        <div className="data_items">
          <h5>Name</h5>
          <h5>Email</h5>
          <h5>Remove</h5>
        </div>
        {
          data.map((element,index) => {
            return (
              <div key={index} className="data_items">
              <p>{element.name}</p>
              <p>{element.email}</p>
              <Button onClick={() => removeItem(index)} variant="contained" color="error">
                <DeleteIcon/>
              </Button>
            </div>
              )
          })
        }
      </div>
      {/* Forms section ends here */}
    </div>
  );
}

export default App;
