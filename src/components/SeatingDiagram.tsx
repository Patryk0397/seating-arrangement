import { Box, Grid, Paper, styled } from "@mui/material";
import { family, friends, main } from "../constants/seating";
import { IPerson } from "../interfaces/person";
import WelcomeMessageComponent from "./WelcomeMessage";

export default function SeatingDiagram({ selectedPerson }: any) {
  const names = [...friends, ...family, ...main];

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const chooseText = (item: IPerson) => {
    if (item.seat === "S-3") return "Emilia & Patryk";

    if (item.name === selectedPerson.name) {
      return item.name.split(" ")[0];
    } else if (item.seat === selectedPerson.plusOne) {
      return names
        .find((i) => i.seat === selectedPerson.plusOne)
        ?.name.split(" ")[0];
    }

    return item.seat;
  };

  const cellStyle = (item: IPerson) => {
    if (item.seat === "S-3") {
      return {
        backgroundColor: "#003303",
        color: "#fff",
        width: "100%",
        fontSize: "11px",
      };
    }
    if (item.name === selectedPerson.name) {
      return {
        backgroundColor: "#025e07",
        color: "#fff",
        fontSize: "small",
      };
    }
    if (item.seat === selectedPerson.plusOne) {
      return {
        backgroundColor: "#05800b",
        color: "#fff",
        fontSize: "small",
      };
    }

    return {};
  };



  return (
    <div>
      {selectedPerson.seat && <WelcomeMessageComponent selectedPerson={selectedPerson} names={names}/>}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "95%", display: "flex", gap: "15%" }}>
          <div
            style={{
              display: "flex-column",
              width: "50%",
              marginTop: "auto",
              textAlign: "center",
            }}
          >
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{
                xs: 1,
                sm: 2,
                md: 3,
                marginLeft: "10%",
                minWidth: "100%",
                justifyContent: "space-between",
              }}
            >
              {friends.map((item, index) => (
                <Grid item key={index} xs={6}>
                  <Item style={{ ...cellStyle(item) }}>{chooseText(item)}</Item>
                </Grid>
              ))}
            </Grid>
          </div>
          <div
            style={{
              display: "flex-column",
              width: "50%",
              marginTop: "auto",
            }}
          >
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3, marginLeft: "10%" }}
            >
              {family.map((item, index) => (
                <Grid item key={index} xs={6}>
                  <Item style={{ ...cellStyle(item) }}>{chooseText(item)}</Item>
                </Grid>
              ))}
            </Grid>
          </div>
        </Box>
      </div>

      <Box sx={{ width: "100%", display: "flex" }}>
        <div
          style={{
            display: "flex-column",
            width: "100%",
            margin: "15px",
            marginRight: "5px",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            rowSpacing={0}
            columnSpacing={{ xs: 3, sm: 0, md: 0 }}
            sx={{
              justifyContent: "between",
              width: "100%",
              "@media (min-width: 0px)": {
                width: "100%",
              },
            }}
          >
            {main.map((item, index) => (
              <Grid item key={index} xs={2.4}>
                <Item style={{ ...cellStyle(item), width: "100%" }}>
                  {chooseText(item)}
                </Item>
              </Grid>
            ))}
          </Grid>
        </div>
      </Box>
    </div>
  );
}
