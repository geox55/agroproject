import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Dialog, Modal, Stack } from "@mui/material";

const CardPlant = ({category, name, h, d, winterResistance, location, grounds, specialAspects, index}) => {
const [open, setOpen] = useState(false);

const handleClose = () => setOpen(false);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

  return (
    <Card sx={{ minWidth: "100px", maxWidth: "300px" }}>
      <CardContent>
    
        <Stack alignItems={"center"}>
        <img
        width={"200px"}
        height={"100px"}
        src={`../../../src/pages/HomePage/images/0.jpeg`}
        alt={name}
      />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {category}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {h}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {d}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {winterResistance}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {location}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {specialAspects}
        </Typography>
        </Stack>

        <Modal 
        sx={{maxWidth: "400px"}}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
         <Box style={style}>
         <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
         </Box>
      </Modal>
      </CardContent>
      <CardActions>
        <Button onClick={() => setOpen(!open)} size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CardPlant;
