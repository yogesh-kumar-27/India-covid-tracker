import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    background: theme.shadows[16],
    paddingTop: theme.spacing(5),
  },
}));
const CovidData = () => {
  const classes = useStyles();

  const [data, setData] = useState([]);

  const url =
    "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true";

  const getData = async () => {
    const res = await axios.get(url);
    // const actualData = await res.json();

    // setData(actualData.regionData)
    // console.log(actualData.regionData)
    setData(res.data.regionData);
    console.log(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container className={classes.root}>
        <TableContainer component={Paper} variant="outlined">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>State</TableCell>
                <TableCell>activeCases</TableCell>
                <TableCell>deceased</TableCell>
                <TableCell>newDeceased</TableCell>
                <TableCell>newInfected</TableCell>
                <TableCell>newRecovered</TableCell>
                <TableCell>recovered</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => {
               return(
                <TableRow key={index}>
                <TableCell>{item.region}</TableCell>
                <TableCell>{item.activeCases}</TableCell>
                <TableCell>{item.deceased}</TableCell>
                <TableCell>{item.newDeceased}</TableCell>
                <TableCell>{item.newInfected}</TableCell>
                <TableCell>{item.newRecovered}</TableCell>
                <TableCell>{item.recovered}</TableCell>
              </TableRow>
               )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default CovidData;
