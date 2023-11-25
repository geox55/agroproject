import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import CardPlant from "../../components/CardPlant/CardPlant";
import { plantsObj } from "./plants";


const HomePage = () => {
    const [plants, setPlants] = useState(plantsObj.plants);


    return (
        <>
         <img
        width={"200px"}
        height={"100px"}
        src={`./images/0.jpeg`}
        alt={"dddddddddddddd"}
      />
        <Grid container spacing={2}>
        {plants.map((plant, index) => <Grid key={index} item spacing={2}><CardPlant
        category={plant.category} name={plant.name} h={plant.h} d={plant.d} winterResistance={plant.winterResistance} location={plant.location} grounds={plant.grounds} specialAspects={plant.specialAspects} index={index}/></Grid>)}
        </Grid>
        </>
    );
}

export default HomePage;