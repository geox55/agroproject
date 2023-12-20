import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Modal, Stack } from "@mui/material";
import images from "./images";

const CardPlant = ({
  category,
  name,
  h,
  d,
  winterResistance,
  location,
  grounds,
  specialAspects,
  imageUrl,
  index,
}) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <Card
      sx={{
        backgroundColor: "#EEE",
        border: "2px solid #888",
        borderRadius: "8px",
        maxWidth: "500px",
        height: "100%",
      }}
    >
      <CardContent>
        <Stack alignItems={"center"}>
          <Box
            sx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            component="img"
            alt={name}
            src={images[imageUrl]}
          ></Box>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {category}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {name}
          </Typography>
        </Stack>

        <Modal
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "24px",
            }}
          >
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {`h: ${h}`}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {`d: ${d}`}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {`Зимостойкость: ${winterResistance}`}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {`Месторасположение: ${location}`}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {`Почва: ${grounds}`}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {`Особенности: ${specialAspects}`}
            </Typography>
          </Box>
        </Modal>
      </CardContent>
      <CardActions>
        <Button onClick={() => setOpen(!open)} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardPlant;
