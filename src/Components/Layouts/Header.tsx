import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default function Header() {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            Exercise database
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
