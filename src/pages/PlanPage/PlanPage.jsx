import plan from "./images/plan.jpg";
import { Stack } from "@mui/material";

const PlanPage = () => {
  return (
    <Stack
      padding={"60px"}
      width={"calc(100%-120px)"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <img height={"1240px"} width={"1755px"} src={plan} alt="plan" />
    </Stack>
  );
};

export default PlanPage;
