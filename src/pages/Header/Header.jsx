import { Button, Typography, Stack, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Stack
      boxShadow={"0 2px 4px rgba(0, 0, 0, 0.1)"}
      padding={"24px 40px"}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{ backgroundColor: "#EEE" }}
    >
      <Box>
        <Typography variant="h2">Agroproject</Typography>
      </Box>
      <Box>
        <Button
          onClick={() => {
            navigate("/");
            console.log("тык");
          }}
        >
          <Typography>Растения</Typography>
        </Button>
        <Button onClick={() => navigate("/plan")}>
          <Typography>Планировка</Typography>
        </Button>
      </Box>
    </Stack>
  );
};

export default Header;
