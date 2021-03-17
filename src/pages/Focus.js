import React from "react";
import Grid from "@material-ui/core/Grid";
import BigCard from "../components/Bigcard";
function Focus() {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={12} md={4}>
        <BigCard
          title="Reptile BigCard"
          content="Article de bigCard"
          img="/empty-card.jpeg"
          slug="reptile"
        />
      </Grid>
    </Grid>
  );
}

export default Focus;
