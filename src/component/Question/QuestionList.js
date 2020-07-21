import React,{useEffect,useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CreateIcon from "@material-ui/icons/Create";
import VisibilityIcon from "@material-ui/icons/Visibility";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ListItem from "@material-ui/core/ListItem";
import MenuItem from '@material-ui/core/MenuItem';
import SearchButton from '../Search'
import SelectSort from '../SelectSort'
import DialogThem from '../DialogThem'
import axios from 'axios'
import Cookies from 'js-cookie'
const useStyles = makeStyles((theme) => ({
  formInfo: {
    marginTop: "50px",
    marginRight: "6%",

    height: "100vh",
    background: "white",
    borderRadius: 10,
  },
  titleformInfo: {
    position: "absolute",
    marginTop: "70px",
    marginLeft: 30,
    fontSize: 20,
    paddingBottom: 30,
    fontWeight:600
  },
  formControl: {
    paddingTop: "30px",
    paddingLeft: "30px",
    maxwidth: "600px",
  },
  table: {
    // marginLeft: 25,
    minWidth: 600,
    maxwidth: 1200,
    width: 1161,
    marginTop: 70,
  },
  eyes: {
    marginRight: 20,
    color: "bold",
  },
  // tableRow:{
  //     '&:nth-of-type(odd)': {
  //         backgroundColor: theme.palette.action.focus,
  //       },
  // }
  containerNext: {
    position: "absolute",
    left: "90%",
    top: "86.5%",
  },
  containerBack: {
    position: "absolute",
    left: "79%",
    top: "86.5%",
  },
  next: {
    fontSize: "1rem",
  },
  back: {
    fontSize: "1rem",
  },
  buttonPageNumber: {
      position:'relative',
    display: "inline",
    padding: ".2rem .41rem",
    borderRadius: "30px!important",
    backgroundColor: "#5089de",
    // background:'red',
    "&": {
      color: "red",
      margin: "0 3px",
      color: "#fff",
      borderColor: "#5089de",
    },
   
    // '&:focus':{
    //     backgroundColor:'red'
    // }
    // },'&:hover':{
    //     backgroundColor:'green'
    // }
  },

  page: {
    position: "absolute",
    left: "80%",
    top: "85%",
  },
}));


export default function QuestionList(props) {
  const classes = useStyles();
  const {TITLE,STT,CAUHOI,DAPANA,DAPANB,DAPANC,DAPAND,DAPANDUNG,DIEM,NGUOITAO,NGAYTAO}=props
  const [selectedIndex, setSelectedIndex] = React.useState(1);
 
  
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const [getList,setGetList]=useState([])
  const token=Cookies.get('token')
  useEffect(() => {
        axios.get('https://navilearn.herokuapp.com/admin/question/list',
        {headers:{"Authorization":`Bearer ${token}`}
      }).then(res=>{
        const {data}=res.data
        console.log(data)
         setGetList(data)
      }).catch((error)=>{
        console.log("Lỗi", error)
      })
        
  },[]);
 
  return (
    <div className="row">
      <div className="col span-1-of-12"></div>
      <div className="col span-11-of-12">
     
        <div className={classes.titleformInfo}> {TITLE} </div>
        
        <form>
        <SearchButton /> 
       
         <SelectSort 
          title='Phân loại'
          GV='Trắc nghiệm'
          SV='Tự Luận'
        />
        
        <DialogThem >
            <SelectSort 
            title='Phân loại'
            GV='Trắc nghiệm'
            SV='Tự Luận'
            />
        </DialogThem>

          <div className={classes.formInfo}>
            <TableContainer>
              <Table
                className={classes.table}
                size="small"
                aria-label="a dense table"
              >
             
                <TableHead>
                  <TableRow style={{ backgroundColor: "#3f8cb5", height: 50 }}>
                    <TableCell align="center" style={{ color: "#ffffff" }}>
                      {STT}
                    </TableCell>
                    <TableCell align="center" style={{ color: "#ffffff" }}>
                       {CAUHOI}
                    </TableCell>
                    <TableCell align="center" style={{ color: "#ffffff" }}>
                      {DAPANA}
                    </TableCell>
                    <TableCell align="center" style={{ color: "#ffffff" }}>
                      {DAPANB}
                    </TableCell>
                    <TableCell align="center" style={{ color: "#ffffff" }}>
                      {DAPANC}
                    </TableCell>
                    <TableCell align="center" style={{ color: "#ffffff" }}>
                      {DAPAND}
                    </TableCell>
                    <TableCell align="center" style={{ color: "#ffffff" }}>
                      {DAPANDUNG}
                    </TableCell>
                    <TableCell align="center" style={{ color: "#ffffff" }}>
                      {DIEM}
                    </TableCell>
                    <TableCell align="center" style={{ color: "#ffffff" }}>
                      {NGUOITAO}
                    </TableCell>
                    <TableCell align="center" style={{ color: "#ffffff" }}>
                      {NGAYTAO}
                    </TableCell>
                    
                    <TableCell align="center">
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {getList.map((row, index) => (
                    <TableRow key={index + 1} hover>
                      <TableCell align="center">{index + 1}</TableCell>
                      <TableCell align="center">{row.noi_dung}</TableCell>
                      <TableCell align="center"></TableCell>
                      <TableCell align="center"></TableCell>
                      <TableCell align="center"></TableCell>
                      <TableCell align="center"></TableCell>
                      <TableCell align="center"></TableCell>
                      <TableCell align="center"></TableCell>
                      <TableCell align="center">{row.createdAt}</TableCell>
                    
                      <TableCell align="center">
                        <IconButton size="small" className={classes.eyes}>
                          <VisibilityIcon />
                        </IconButton>
                        <IconButton size="small" className={classes.eyes}>
                          <CreateIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
         

            <IconButton size="small" className={classes.containerNext}>
              <ArrowForwardIosIcon className={classes.next} />
            </IconButton>
            <ul className={classes.page}>
              <ListItem
                className={classes.buttonPageNumber}
                button
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
              >
                1
              </ListItem>
              <ListItem
                className={classes.buttonPageNumber}
                button
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}
              >
                2
              </ListItem>
              <ListItem
                className={classes.buttonPageNumber}
                button
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}
              >
                3
              </ListItem>
              <ListItem
                className={classes.buttonPageNumber}
                button
                selected={selectedIndex === 4}
                onClick={(event) => handleListItemClick(event, 4)}
              >
                4
              </ListItem>
              <ListItem
                className={classes.buttonPageNumber}
                button
                selected={selectedIndex === 5}
                onClick={(event) => handleListItemClick(event, 5)}
              >
                5
              </ListItem>

              {/* <li className={classes.buttonPageNumber}  button
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}>1</li>
                            <li className={classes.buttonPageNumber}  button
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}>2</li>
                            <li className={classes.buttonPageNumber}>3</li>
                            <li className={classes.buttonPageNumber}>4</li>
                            <li className={classes.buttonPageNumber}>5</li> */}
            </ul>
            <IconButton size="small" className={classes.containerBack}>
              <ArrowBackIosIcon className={classes.back} />
            </IconButton>
            </TableContainer>
          </div>
        </form>
      </div>
    </div>

  );
}
