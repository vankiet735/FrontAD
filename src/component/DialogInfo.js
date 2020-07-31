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
import SelectSort from "./SelectSort";
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

class DialogInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
    this.props.onClickInfor(this.props.id, this.props.age);
  };
  handleClose = () => {
    this.setState({ open: false });
  };


  render() {
    const { classes, children } = this.props;
    const { open } = this.state;
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
          <DialogTitle id="form-dialog-title">Thông Tin {this.props.title}</DialogTitle>
            
          <DialogContent>
            <form>
              <div className={classes.formControl}>
                <label className={classes.titleFormControl}>Họ</label>
                <input
                  className={classes.contentFormControl}
                  name="ho"
                  type="text"
                  value={this.props.Data.ho}
                  disabled={this.props.status}
                  onChange={this.props.handleChange}
                />
              </div>
              <div className={classes.formControl}>
                <label className={classes.titleFormControl}>Tên</label>
                <input
                  className={classes.contentFormControl}
                  name="ten"
                  type="text"
                  value={this.props.Data.ten}
                  disabled={this.props.status}
                  onChange={this.props.handleChange}
                />
              </div>
              <div className={classes.formControl}>
                <label className={classes.titleFormControl}>Email</label>
                <input
                  name="email"
                  className={classes.contentFormControl}
                  type="text"
                  value={this.props.Data.email}
                  disabled={this.props.status}
                  onChange={this.props.handleChange}
                />
              </div>
              <span className={classes.ngaysinh}>Ngày sinh</span>
              <TextField
                name="ngay_sinh"
                label="Birthday"
                type="date"
                value={this.props.Data.ngay_sinh}
                className={classes.contentNgaysinh}
                InputLabelProps={{
                  shrink: true,
                }}
                disabled={this.props.status}
                onChange={this.props.handleChange}
              />

              <div className={classes.formControl}  style={{display:this.props.display}}>
                <label className={classes.titleFormControl}>Người tạo</label>
                <input
                  name="nguoi_tao_id"
                  className={classes.contentFormControl}
                  type="text"
                  value={this.props.name}
                  disabled={this.props.status}
                 
                />
              </div>
              <DialogActions>
            {/* <Button onClick={this.handleClose} color="primary">
              Hủy bỏ
            </Button> */}
            <Button type={this.props.type} onClick={this.handleClose} color="primary">
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

export default withStyles(styles, { withTheme: true })(DialogInfo);
