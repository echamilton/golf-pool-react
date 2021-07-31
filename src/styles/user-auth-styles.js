import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    width: "90%",
    margin: "auto",
    "@media (min-width: 780px)": {
      width: "50%",
    },
    marginTop: "36px",
  },
  card: {
    maxWidth: "50%",
    display: "flex",
    alignItems: "center",
  },
  cardHeader: {
    textAlign: "center",
  },
  cardContent: {
    display: "flex",
    justifyContent: "center",
  },
  cardactions: {
    justifyContent: "center",
    marginBottom: "16px",
  },
  inputField: {
    display: "block",
    justifyContent: "center",
  },
  input: {
    marginBottom: "16px",
    width: "250px",
  },
  link: {
    fontWeight: "600",
    fontSize: "14px",
    textTransform: "none",
    marginBottom: "16px",
  },
  linkWrapper: {
    textAlign: "center",
  },
});
