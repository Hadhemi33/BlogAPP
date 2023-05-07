import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    //shadow
    boxShadow: "0px 1px 70px #9dc190",
    background: "black",
    //borderRadius: 15,
    marginBottom: "30px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
    width: "100vw",
    position: "fixed",
  },
  heading: {
    color: "white",
    textDecoration: "none",
  },
  image: {
    marginLeft: "15px",
  },
  toolbar: {
    color: "white !important",

    display: "flex",
    justifyContent: "flex-end",
    width: "700px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
