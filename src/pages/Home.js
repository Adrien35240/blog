import React from "react";
import LittleCard from "../components/LittleCard";
import Grid from "@material-ui/core/Grid";
function Home() {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={12} md={4}>
        <LittleCard
          title="Reptile"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          img="/empty-card.jpeg"
          slug="reptile"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <LittleCard
          title="Reptile2"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          img="/empty-card.jpeg"
          slug="reptile"
        />
      </Grid>
    </Grid>
  );
}

export default Home;
