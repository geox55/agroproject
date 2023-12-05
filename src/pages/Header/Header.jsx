import { Button, Typography, Stack, Box } from "@mui/material";

const Header = () => {
  return (
    <Stack
      boxShadow={"0 2px 4px rgba(0, 0, 0, 0.1)"}
      padding={"24px 40px"}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Box>
        <Typography variant="h2">Agroproject</Typography>
      </Box>
      <Box>
        <Button>
          <Typography>Растения</Typography>
        </Button>
        <Button>
          <Typography>Планировка</Typography>
        </Button>
      </Box>
    </Stack>
  );
};

export default Header;
