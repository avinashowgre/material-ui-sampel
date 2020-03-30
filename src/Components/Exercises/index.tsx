import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Leftpane from "./Leftpane";
import Rightpane from "./Rightpane";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};

export default props => {
  return (
    <Grid container sm={12}>
      <Grid item sm>
        <Leftpane styles={styles} />
      </Grid>
      <Grid item sm>
        <Rightpane styles={styles} />
      </Grid>
    </Grid>
  );
};
