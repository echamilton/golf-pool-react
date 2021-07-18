import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./../styles/user-auth-styles";
import { useHistory } from "react-router-dom";

export default function Login() {
  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = (event) => {
    console.log("clicked me", event);
  };

  const handleResetCTA = (event) => {
    history.push("/reset");
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader title="Login" style={{ textAlign: "center" }} />
      <CardContent className={classes.cardContent}>
        <form noValidate autoComplete="off">
          <TextField
            className={classes.inputField}
            required
            id="email"
            label="Email"
            InputProps={{
              className: classes.input,
            }}
          />
          <TextField
            className={classes.inputField}
            required
            id="password"
            label="Password"
            type="password"
            InputProps={{
              className: classes.input,
            }}
          />
        </form>
      </CardContent>
      <CardActions className={classes.cardactions}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Login
        </Button>
      </CardActions>
      <div className={classes.linkWrapper}>
        <Button
          className={classes.link}
          color="primary"
          onClick={handleResetCTA}
        >
          Forgot your password?
        </Button>
      </div>
    </Card>
  );
}
