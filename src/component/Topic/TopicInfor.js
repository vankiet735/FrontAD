import { withStyles, makeStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Icon from "@material-ui/core/Icon";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import VisibilityIcon from "@material-ui/icons/Visibility";
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from "@material-ui/icons/Create";

const styles = (theme) => ({
  btnThem: {
    position: "absolute",
    right: "7%",
    marginTop: "15px",
    borderRadius: "5px",
    background: theme.palette.primary.main,
    color: "white",
    "&:hover": {
      background: theme.palette.primary.light,
    },
  },
  selectsort: {
    position: "absolute",
    top: "10px",
    right: "25px",
  },
  formInfo: {
    marginTop: "107px",
    marginRight: "6%",
    marginLeft: "6%",
    height: "70vh",
    background: "white",
  },
  titleformInfo: {
    position: "absolute",
    marginTop: "65px",
    marginLeft: 60,
    fontSize: 17,
  },
  formControl: {
    maxwidth: "700px",
  },
  titleFormControl: {
    width: "100px",
    float: "left",
    paddingTop: "32px",
  },
  contentFormControl: {
    width: "400px",
    borderRadius: "5px",
    height: "30px",
    paddingLeft: "10px",
    marginTop: "25px",
    outline: "none",
    "&:focus": {
      borderColor: "#3f51b5",
    },
  },
  ngaysinh: {
    position: "absolute",
    marginTop: "30px",
  },
  contentNgaysinh: {
    marginTop: "5px",
    marginLeft: "100px",
  },
 
});

class TopicInfor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      errors:'',
      status:true,

    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
    this.props.getInfor(this.props.id)
  }
  handleClose = () => {
    this.setState({ open: false,errors:'' });
    this.props.clearForm()
  };

  Checkvalidate=()=>{
    if(this.props.data.tieu_de==''){
    this.setState({errors:'Tên chủ đề không được bỏ trống',status:true})
    }
  else if(this.props.data.mo_ta==''){
    this.setState({errors:'Mô tả không được bỏ trống',status:true})
  }else{
    this.setState({errors:'',
            status:false,
              })
  }
}

  
  render() {
   
    const { classes,disable} = this.props;
    const { open,errors,status} = this.state;
   const {tieu_de,mo_ta,nguoi_tao,ngay_tao}=this.props.data



    return (
      <div>
        <IconButton
          size="small"
          className={classes.eyes}
          variant="outlined"
          onClick={this.handleClickOpen}
        >
          {this.props.icon}
        </IconButton>

      
       
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Chi tiết danh mục</DialogTitle>
             <div style={{textAlign:'center',color:'red'}}> {errors}{this.props.success}</div>
          <DialogContent>
            <form onSubmit={this.props.onsubmit}>
            <div className={classes.formControl}>
                <label className={classes.titleFormControl}>Tên danh mục</label>
                <input
                  className={classes.contentFormControl}
                  name="tieu_de"
                  type="text"
                  value={tieu_de}
                  onChange={this.props.change}
                  onBlur={this.Checkvalidate}
                  disabled={disable}
                />
              </div>
              <div className={classes.formControl}>
                <label className={classes.titleFormControl}>Mô tả</label>
                <input
                  className={classes.contentFormControl}
                  name="mo_ta"
                  type="text"
                  value={mo_ta}
                  onChange={this.props.change}
                  onBlur={this.Checkvalidate}
                  disabled={disable}
                />
              </div>
              <div className={classes.formControl} style={{display:this.props.display}}>
                <label className={classes.titleFormControl}>Người tạo</label>
                <input
                  className={classes.contentFormControl}
                  name="nguoi_tao"
                  type="text"
                  value={nguoi_tao}
                  onChange={this.props.change}
                  disabled={disable}
                />
              </div>
              <div className={classes.formControl} style={{display:this.props.display}}>
                <label className={classes.titleFormControl}>Ngày tạo</label>
                <input
                  className={classes.contentFormControl}
                  name="ngay_tao"
                  type="text"
                  value={ngay_tao}
                  onChange={this.props.change}
                  disabled={disable}
                />
              </div>
              <DialogActions>
            {/* <Button onClick={this.handleClose} color="primary">
              Hủy bỏ
            </Button> */}
            <Button type={this.props.type} onClick={this.props.status?this.handleClose:''} disabled={this.props.status?'':status} color="primary" >
              Xác nhận
            </Button>
          </DialogActions>
            </form>
          </DialogContent>

        
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(TopicInfor);
