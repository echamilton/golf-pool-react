import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./../styles/sign-up.css";

export default function PasswordReset() {
  return (
    <Card className="card-info" variant="outlined">
      <CardHeader title="Reset Password" style={{ textAlign: "center" }} />
      <CardContent>
        <form noValidate autoComplete="off">
          <TextField className="field" required id="email" label="Email" />
        </form>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary">
          Sign Up
        </Button>{" "}
      </CardActions>
    </Card>
  );
}
