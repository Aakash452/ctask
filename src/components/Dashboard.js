import React, { useState, useEffect } from "react";
// import styled from "styled-components";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MenuItem from "@mui/material/MenuItem";
import moment from 'moment'
import axios from 'axios'

import {
  AddBtn,
  Content,
  Header,
  Heading,
  Highlight,
  LeftContent,
  Logo,
  Options,
  RightContent,
  SearchBar,
  Table,
  TableCell,
  TableHeader,
  Uname,
} from "../styles/DashboardStyle";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  Stack,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function Dashboard() {
  const [data,setData] = useState([])
  const [uname, setUname] = useState("Uname");
  const [sname, setSname] = useState('');
  const [idate, setIdate] = useState(null);
  const [address, setAddress] = useState('');
  const [pnumber, setPnumber] = useState(0);
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [bidea, setBidea] = useState('');
  const [industry, setIndustry] = useState('IT Consultancy');
  const [sector, setSector] = useState('IT Consultancy');

  const [open, openchange] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [selectedDataId, setSelectedDataId] = useState(null);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    
    try {
      if (isUpdateMode) {
        // If in update mode, make a request to update the data
        await axios.put(`http://localhost:3001/data/${selectedDataId}`,  {
          sname: sname,
          idate:idate,
          address: address,
          city: city,
          state: state,
          email:email,
          pnumber: pnumber,
          fname:fname,
          industry:industry,
          sector:sector,
          bidea:bidea
        });
      }
      else{
        const response = await axios.post('http://localhost:3001/data', {
          sname: sname,
          idate:idate,
          address: address,
          city: city,
          state: state,
          email:email,
          pnumber: pnumber,
          fname:fname,
          industry:industry,
          sector:sector,
          bidea:bidea
        });
        console.log('Response:', response.data);
      }
      
      
      setSname('');
    setIdate(null);
    setAddress('')
    setCity('')
    setState('')
    setEmail('')
    setPnumber(0)
    setFname('')
    setIndustry('')
    setSector('')
    setBidea('')

      setIsUpdateMode(false);
      fetchData()
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
    }
  }

  const handleUpdateClick = (id) => {
    // Set the selected data ID and set update mode to true
    setSelectedDataId(id);
    setIsUpdateMode(true);

    // Find the selected data object
    const selectedData = data.find((item) => item._id === id);

    // Update the form data with the selected data values
    setSname(selectedData.sname);
    setIdate(selectedData.idate);
    setAddress(selectedData.address)
    setCity(selectedData.city)
    setState(selectedData.state)
    setEmail(selectedData.email)
    setPnumber(selectedData.pnumber)
    setFname(selectedData.fname)
    setIndustry(selectedData.industry)
    setSector(selectedData.sector)
    setBidea(selectedData.bidea)
  };
  const handleDelete = async (id) => {
    try {
      
      await axios.delete(`http://localhost:3001/data/${id}`);
      // Refresh the data after successful deletion
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    // Fetch data from the API when the component mounts
    
    fetchData();
  }, []); 
  console.log(data);

  const functionopenpopup = () => {
    openchange(true);
  };
  const closepopup = () => {
    openchange(false);
  };
  const SectorData = [
    {
      lable: "IT Consultancy",
    },
    {
      lable: "IT management",
    },
    {
      lable: "IT services",
    },
    {
      lable: "Agritech",
    },
    {
      lable: "Agriculture Chemicals",
    },
    {
      lable: "Organic Agriculture",
    },
    {
      lable: "Web Design",
    },
    {
      lable: "Fashion Technologies",
    },
    {
      lable: "Others",
    },
  ];
  const IndustriesData = [
    {
      label: "IT services",
    },
    {
      label: "Agriculture",
    },
    {
      label: "Biotechnologies",
    },
    {
      label: "Design",
    },
    {
      label: "Fashion",
    },
    {
      label: "Green Technologies",
    },
    {
      label: "Marketing",
    },
    {
      label: "Others",
    },
  ];

  return (
    <div style={{ minHeight: "97vh" }}>
      <Dialog open={open} onClose={closepopup} fullWidth maxWidth="sm">
        <DialogTitle>
          Add StartUps{" "}
          <IconButton onClick={closepopup} style={{ float: "right" }}>
            <CloseIcon color="primary"></CloseIcon>
          </IconButton>{" "}
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} margin={2}>
            <TextField
              id="filled-basic"
              label="StartUp Name"
              variant="filled"
              value={sname}
              onChange={(e)=>{
                setSname(e.target.value)
              }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker onChange={(date)=>{
                  
                  setIdate(new Date(date))
              }}/>
            </LocalizationProvider>
            <TextField
              type="text"
              id="filled-basic"
              label="StartUp Address"
              variant="filled"
              value={address}
              onChange={(e)=>{
                setAddress(e.target.value)
              }}
            />
            <TextField
              type="text"
              id="filled-basic"
              label="City"
              variant="filled"
              value={city}
              onChange={(e)=>{
                setCity(e.target.value)
              }}
            />
            <TextField
              type="text"
              id="filled-basic"
              label="State"
              variant="filled"
              value={state}
              onChange={(e)=>{
                setState(e.target.value)
              }}
            />
            <TextField
              type="email"
              id="filled-basic"
              label="Email Address"
              variant="filled"
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
            />
            
            <TextField
              type="number"
              id="filled-basic"
              label="Phone Number"
              variant="filled"
              value={pnumber}
              onChange={(e)=>{
                setPnumber(e.target.value)
              }}
            />
            <TextField
              type="text"
              id="filled-basic"
              label="Founder Name"
              variant="filled"
              value={fname}
              onChange={(e)=>{
                setFname(e.target.value)
              }}
            />
            <TextField
              id="filled-select-currency"
              select
              label="Industry"
              defaultValue="IT sector"
              variant="filled"
              value={industry}
              onChange={(e)=>{setIndustry(e.target.value)}}
              
            >
              {IndustriesData.map((option) => (
                <MenuItem value={option.label}>{option.label}</MenuItem>
              ))}
            </TextField>
            <TextField
              id="filled-select-currency"
              select
              label="Sector"
              defaultValue="IT Consultancy"
              value={sector}
              variant="filled"
              onChange={(e)=>{setSector(e.target.value)}}
            >
              {SectorData.map((option) => (
                <MenuItem value={option.lable}>{option.lable}</MenuItem>
              ))}
            </TextField>
            <TextField
              type="text"
              id="filled-basic"
              label="Business Ideas"
              value={bidea}
              onChange={(e)=>{
                setBidea(e.target.value)
              }}
              multiline
              rows={4}
              variant="filled"
            />
            <Button onClick={handleSubmit} variant="contained">Submit</Button>
           
            
          </Stack>
        </DialogContent>
      </Dialog>

      <Header>
        <Logo>START-UP SAHAY</Logo>
        <Uname>Welcome </Uname>
      </Header>
      <Content>
        <LeftContent>
          <Highlight>Start-Ups {">"}</Highlight>
        </LeftContent>
        <RightContent>
          <Heading>Start-Up List</Heading>
          
          <Options>
            <SearchBar
              name="search"
              id="search"
              type="text"
              placeholder="Search"
              value={""}
            />
            <Button
              onClick={functionopenpopup}
              color="primary"
              variant="contained"
            >
              Add StartUps
            </Button>
          </Options>
          
          {data.length > 0 ? (
  <Table>
    <thead>
      <tr>
        <TableHeader>Sr.No</TableHeader>
        <TableHeader>StartUp Name</TableHeader>
        <TableHeader>Inco. Date</TableHeader>
        <TableHeader>StartUp Address</TableHeader>
        <TableHeader>City</TableHeader>
        <TableHeader>State</TableHeader>
        <TableHeader>Email ID</TableHeader>
        <TableHeader>Phone NO.</TableHeader>
        <TableHeader>Founder Name</TableHeader>
        <TableHeader>Industry</TableHeader>
        <TableHeader>Sector</TableHeader>
        <TableHeader>Business Ideas</TableHeader>
        <TableHeader>Action</TableHeader>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={item._id}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{item.sname}</TableCell>
          <TableCell>{item.idate}</TableCell>
          <TableCell>{item.address}</TableCell>
          <TableCell>{item.city}</TableCell>
          <TableCell>{item.state}</TableCell>
          <TableCell>{item.email}</TableCell>
          <TableCell>{item.pnumber}</TableCell>
          <TableCell>{item.fname}</TableCell>
          <TableCell>{item.industry}</TableCell>
          <TableCell>{item.sector}</TableCell>
          <TableCell>{item.bidea}</TableCell>
          <TableCell>
            <AddBtn onClick={() => handleDelete(item._id)}>Delete</AddBtn>
            <AddBtn onClick={() => { functionopenpopup()
              handleUpdateClick(item._id)}
            } >Update</AddBtn>
          </TableCell>
        </tr>
      ))}
    </tbody>
  </Table>
) : (
  <p>No data</p>
)}

          {/* <Table>
            <thead>
              <tr>
                <TableHeader>Sr.No</TableHeader>
                <TableHeader>StartUp Name</TableHeader>
                <TableHeader>Inco. Date</TableHeader>
                <TableHeader>StartUp Address</TableHeader>
                <TableHeader>City</TableHeader>
                <TableHeader>State</TableHeader>
                <TableHeader>Email ID</TableHeader>
                <TableHeader>Phone NO.</TableHeader>
                <TableHeader>Founder Name</TableHeader>
                <TableHeader>Industry</TableHeader>
                <TableHeader>Sector</TableHeader>
                <TableHeader>Business Ideas</TableHeader>
                <TableHeader>Action</TableHeader>
              </tr>
            </thead>
            <tbody>
            {data.length > 0 ? data.map((item,index)=>{
              <tr key={item}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.sname}</TableCell>
                <TableCell>{item.idate}</TableCell>
                <TableCell>{item.address}</TableCell>
                <TableCell>{item.city}</TableCell>
                <TableCell>{item.state}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.pnumber}</TableCell>
                <TableCell>{item.fname}</TableCell>
                <TableCell>{item.industry}</TableCell>
                <TableCell>{item.sector}</TableCell>
                <TableCell>{item.bidea}</TableCell>
                <TableCell>
                  <AddBtn>Delete</AddBtn>
                </TableCell>
              </tr>
            }):  (
      <p>No data available.</p>
    )}
              
            </tbody>
          </Table> */}
        </RightContent>
      </Content>
    </div>
  );
}

export default Dashboard;
