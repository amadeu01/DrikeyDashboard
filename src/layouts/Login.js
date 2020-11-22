import React from "react";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/People";
import LockIcon from "@material-ui/icons/Lock";
import Copyright from "@material-ui/icons/Copyright";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-dashboard-react/views/login.js";

const useStyles = makeStyles(styles);

function Login() {
  const classes = useStyles();
  return (
    <Card className={classes.loginCard}>
      <CardHeader color="danger" stats icon>
        <CardIcon color="danger">
          <LockIcon />
        </CardIcon>
        <p className={classes.cardCategory}>Drikey</p>
        <h3 className={classes.cardTitle}>Login</h3>
      </CardHeader>
      <CardBody className={classes.textRight}>
        <h4 className={classes.cardTitle}>Efetuar login</h4>
        <p className={classes.cardCategory}>
          <span className={classes.successText}></span> Informa o login e senha.
        </p>
        <CustomInput
          labelText="Email"
          color="danger"
          id="material"
          formControlProps={{
            fullWidth: true,
          }}
          inputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <People />
              </InputAdornment>
            ),
          }}
        />

        <CustomInput
          labelText="Password"
          color="danger"
          id="material"
          formControlProps={{
            fullWidth: true,
          }}
          inputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />

        <div className={classes.buttonRight}>
          <Button
            color="danger"
            onClick={() => {
              document.location = "/admin/dashboard";
            }}
          >
            Entrar
          </Button>
        </div>
      </CardBody>
      <CardFooter stats>
        <div className={classes.stats}>
          <Copyright />
          2019 Drikey
        </div>
      </CardFooter>
    </Card>
  );
}

export default Login;
