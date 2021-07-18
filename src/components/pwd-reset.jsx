import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./../styles/user-auth-styles";

const PasswordReset = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader title="Reset Password" className={classes.cardHeader} />
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
        </form>
      </CardContent>
      <CardActions className={classes.cardactions}>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </CardActions>
    </Card>
  );
};

export default PasswordReset;
