import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    borderRadius: "20px",
    objectFit: "cover",
    width: "50%",
    padding: "20px",
  },
  paper: {
    backgroundColor: "black",

    width: "100%",
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "rows",
    padding: theme.spacing(2),
    boxShadow: "0px 1px 10px #9dc190",
<<<<<<< HEAD

=======
>>>>>>> 50edb179b923b7d61a1b7c467488890f1d4e35cf
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#609966",
  },
  form: {
    // backgroundColor: "red",
    width: "100%", // Fix IE 11 issue.

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    // marginTop: theme.spacing(30),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "#FEE8B0",
    fontSize: "20px",
    fontWeight: "bold",
    backgroundColor: "#609966",
  },
  googleButton: {
    width: "100%",
    color: "#609966",
    marginBottom: theme.spacing(2),
  },
  inputStyle: {
    backgroundColor: "white",
    color: "white",
  },
}));
