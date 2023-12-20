import { Grid, Stack, Typography, Button } from "@mui/material";
import CardPlant from "../../components/CardPlant/CardPlant";

const GridPlants = ({ plants }) => {
  return (
    <Grid container spacing={2} columns={{ xs: 3, md: 12 }}>
      {plants.map((plant, index) => (
        <Grid
          key={index}
          item
          rowSpacing={2}
          spacing={2}
          xs={4}
          height={"100%"}
        >
          <CardPlant
            category={plant.category}
            name={plant.name}
            h={plant.h}
            d={plant.d}
            winterResistance={plant.winterResistance}
            location={plant.location}
            grounds={plant.grounds}
            specialAspects={plant.specialAspects}
            imageUrl={plant.imageUrl}
            index={index}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default GridPlants;
