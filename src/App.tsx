import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box, Button, Typography } from "@mui/material";
import { friends, family, main } from "./constants/seating";
import BasicSelect from "./components/Select";
import { IPerson } from "./interfaces/person";

function App() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const names = [...friends, ...family, ...main];

  const [selectedPerson, setSelectedPerson] = React.useState({
    name: "",
    seat: "",
    plusOne: null,
  });

  const cellStyle = (item: IPerson) => {
    if (["S-3", "S-4"].includes(item.seat)) {
      return {
        backgroundColor: "gold",
        color: "black",
      };
    }
    if (item.name === selectedPerson.name) {
      return {
        backgroundColor: "#f50057",
        color: "#fff",
      };
    }
    if (item.seat === selectedPerson.plusOne) {
      return {
        backgroundColor: "#f50057",
        color: "yellow",
      };
    }

    return {};
  };

  const chooseText = (item: IPerson) => {
    if (item.seat === "S-3")
      return "Emilia";
    if (item.seat === "S-4")
      return "Patryk";

    if (item.name === selectedPerson.name) {
      return item.name.split(" ")[0];
    } else if (item.seat === selectedPerson.plusOne) {
      return names
        .find((i) => i.seat === selectedPerson.plusOne)
        ?.name.split(" ")[0];
    }

    return item.seat;
  };

  const generateMessage = (person: IPerson) => {
    const plusOne: IPerson | undefined = names.find(
      (i) => i.seat === person.plusOne
    );
    let plusOneDirection = "";

    if (plusOne) {
      const plusOneSeatNumber = parseInt(plusOne.seat.split("-")[1]);
      const personSeatNumber = parseInt(person.seat.split("-")[1]);

      if (
        (plusOneSeatNumber > personSeatNumber && plusOneSeatNumber % 2 !== 0) ||
        (plusOneSeatNumber < personSeatNumber && plusOneSeatNumber % 2 === 0)
      ) {
        if (person.lang === "ENG") plusOneDirection = "to your right";
        else if (person.lang === "CZ") plusOneDirection = "vpravo";
        else plusOneDirection = "po twojej prawej";
      } else {
        if (person.lang === "ENG") plusOneDirection = "to your left";
        else if (person.lang === "CZ") plusOneDirection = "vlevo";
        else plusOneDirection = "po twojej lewej";
      }
    }

    if (person.lang === "ENG") {
      return (
        <div
          style={{
            height: "320px",
            textAlign: "center",
            border: "1px solid black",
            marginBottom: "20px",
          }}
        >
          <h3>Hey, Thanks for coming!</h3>
          <p>
            {`You are sitting at table #${person.seat} at seat #${person.seat}`}
            .
          </p>
          {plusOne && (
            <p>{`${plusOne.name} is sitting ${plusOneDirection}`}.</p>
          )}
        </div>
      );
    } else if (person.lang === "CZ") {
      return (
        <div
          style={{
            height: "320px",
            textAlign: "center",
            border: "1px solid black",
            marginBottom: "20px",
          }}
        >
          <h3>Ahoj, děkujeme za přijetí!</h3>
          <p>{`Sedíte na stolu #${person.seat} na sedadle #${person.seat}`}</p>
          {plusOne && <p>{`${plusOne.name} sedí ${plusOneDirection}`}</p>}
        </div>
      );
    } else {
      return (
        <div
          style={{
            height: "320px",
            textAlign: "center",
            paddingTop: "20px",
            border: "1px solid black",
            marginBottom: "20px",
          }}
        >
          <h3>Hej, dziękujemy za przybycie!</h3>
          <p>{`Siedzisz przy stole #${person.seat} na miejscu #${person.seat}`}</p>
          {plusOne && <p>{`${plusOne.name} siedzi ${plusOneDirection}`}</p>}
        </div>
      );
    }
  };

  const generateBackMessage = (person: IPerson) => {
    if (person.lang === "ENG") {
      return "Go Back";
    } else if (person.lang === "CZ") {
      return "Jít zpět";
    } else {
      return "Wróć";
    }
  };

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          paddingBottom: "10px",
          borderBottom: selectedPerson.name && "1px solid #b8b7b6",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Parisienne",
            fontSize: "50px",
            display: "flex",
            justifyContent: "center",
            marginTop: selectedPerson.name ? 0 : "30%",
          }}
        >
          Emilia & Patryk
        </Typography>
        <Typography
          sx={{
            fontFamily: "Parisienne",
            fontSize: "25px",
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          27.08.2022
        </Typography>
      </div>
      <div
        style={{
          width: "100%",
          marginTop: "15px",
          paddingBottom: "15px",
          display: "flex",
          justifyContent: !selectedPerson.name ? "center" : "start",
          alignItems: "center",
        }}
      >
        {!selectedPerson.name ? (
          <BasicSelect
            items={names}
            value={selectedPerson}
            onChange={setSelectedPerson}
          />
        ) : (
          <Button
            variant="contained"
            style={{
              backgroundColor: "gold",
              color: "black",
              marginLeft: "10px",
              marginBottom: "5px",
            }}
            onClick={() =>
              setSelectedPerson({ name: "", seat: "", plusOne: null })
            }
          >
            {generateBackMessage(selectedPerson)}
          </Button>
        )}
      </div>
      {selectedPerson.name !== "" && (
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
              {selectedPerson.seat !== "" && generateMessage(selectedPerson)}
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3, marginLeft: "10%" }}
              >
                {friends.map((item, index) => (
                  <Grid item key={index} xs={6}>
                    <Item style={{ ...cellStyle(item) }}>
                      {chooseText(item)}
                    </Item>
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
                    <Item style={{ ...cellStyle(item) }}>
                      {chooseText(item)}
                    </Item>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Box>
        </div>
      )}

      <div style={{ width: "100%" }}>
        {selectedPerson.name !== "" && (
          <Box sx={{ width: "100%", display: "flex", marginTop: "30px", justifyContent: "center", marginBottom: "30px" }}>
            <div
              style={{
                display: "flex-column",
                width: "95%",
                marginTop: "auto",
                justifyContent: "center",
              }}
            >
              <Grid
                container
                rowSpacing={0}
                columnSpacing={{ xs: 24, sm: 0, md: 1, marginLeft: "10%", width: "100%" }}
              >
                {main.map((item, index) => (
                  <Grid item key={index} xs={2}>
                    <Item style={{ ...cellStyle(item) }}>
                      {chooseText(item)}
                    </Item>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Box>
        )}
        ;
      </div>
    </div>
  );
}

export default App;
