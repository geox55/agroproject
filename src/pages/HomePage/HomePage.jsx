import { Grid, Stack, Typography, Button, ButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { plantsObj } from "./plants";
import GridPlants from "../../components/GridPlants/GridPlants";
import * as React from "react";

const HomePage = () => {
  const [plants, setPlants] = useState(plantsObj.plants);
  const [plantType, setPlantType] = useState("");

  useEffect(() => {
    setPlants(
      plantsObj.plants.filter((plant) => {
        if (plantType !== "") {
          return plant.category === plantType;
        }
        return true;
      })
    );
  }, [plantType]);

  return (
    <Stack padding={"64px"} gap={"24px"}>
      <Stack flexDirection={"row"} justifyContent={"space-between"}>
        <Button onClick={() => setPlantType("")}>
          <Typography>Все</Typography>
        </Button>
        <Button onClick={() => setPlantType("Хвойные деревья")}>
          <Typography>Хвойные деревья</Typography>
        </Button>
        <Button onClick={() => setPlantType("Хвойные кустарники")}>
          <Typography>Хвойные кустарники</Typography>
        </Button>
        <Button onClick={() => setPlantType("Лиственные деревья")}>
          <Typography>Лиственные деревья</Typography>
        </Button>
        <Button onClick={() => setPlantType("Лиственные кустарники")}>
          <Typography>Лиственные кустарники</Typography>
        </Button>
        <Button onClick={() => setPlantType("Лианы")}>
          <Typography>Лианы</Typography>
        </Button>
        <Button onClick={() => setPlantType("Травянистые многолетники")}>
          <Typography>Травянистые многолетники</Typography>
        </Button>
      </Stack>
      <GridPlants plants={plants} />
    </Stack>
  );
};

export default HomePage;
