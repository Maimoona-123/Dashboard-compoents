import axios from "axios";
import React, { useEffect, useState } from "react";
import Tables from '../Components/Table';
import { Button, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);

  return (
    <div>
      <div>
        <Typography
          variant="h3"
          style={{
            display: "inline",

            textAlign: "center",
            marginBottom: 30,
          }}
        >
          List Users
        </Typography>

        <Button
          onClick={() => {
            navigate("/create");
          }}
          startIcon={<AddRoundedIcon />}
          sx={{ marginLeft: "75%", marginBottom: 3 }}
          variant="outlined"
        >
          Create
        </Button>
      </div>

      {data && <Tables userData={data} />}
    </div>
  );
};

export default Home;