import loginLayout from "assets/jss/material-dashboard-react/layouts/login.js";
import dashboardLayout from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const appStyle = (theme) => ({
  ...dashboardLayout,
  ...loginLayout(theme),
  loginCard: {
    margin: "auto",
    width: 400,
  },
  buttonRight: {
    textAlign: "right",
  },
});

export default appStyle;
