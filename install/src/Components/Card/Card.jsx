import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate, useParams } from "react-router-dom";
// import { SiAxios } from "react-icons/si";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "purple",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// const {id} = useParams()

const deletebtn = (id)=>{
    const confirm = window.confirm('would you like to delete this id');
    if(confirm){
    axios
    .delete(`http://localhost:3000/users${id}`).then((res)=>{
      console.log(res);
      
    })
    .catch((err)=>{
      console.log(err);
      
    })
    }
}



const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Tables({ userData }) {
  const navigate = useNavigate();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">Controls</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((e, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {e.id}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {e.username}
              </StyledTableCell>
              <StyledTableCell align="right">{e.email}</StyledTableCell>
              <StyledTableCell align="right">{e.name}</StyledTableCell>
              <StyledTableCell align="right">{e.phone}</StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  onClick={() => {
                    navigate(`/update/${e.id}`);
                  }}
                  startIcon={<EditIcon />}
                  sx={{ marginRight: 2 }}
                  variant="contained"
                >
                  Update
                </Button>
                <Button
                  endIcon={<DeleteIcon />}
                  sx={{ marginRight: 2 }}
                  variant="contained"
                  onClick={deletebtn(e.id)}
                >
                  Del
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}