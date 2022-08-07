import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box, Button, Typography } from "@mui/material";
import { friends, family, main } from "./constants/seating";
import BasicSelect from "./components/Select";
import { IPerson } from "./interfaces/person";
import { tables } from "./constants/tables";
import SeatingDiagram from "./components/SeatingDiagram";
import { Header } from "./components/Header";

function App() {

  const names = [...friends, ...family, ...main];

  const [selectedPerson, setSelectedPerson] = React.useState({
    name: "",
    seat: "",
    plusOne: null,
  });

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
      <Header
        selectedPerson={selectedPerson}
        ></Header>
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
              backgroundColor: "white",
              color: "black",
              marginLeft: "10px",
              marginBottom: "5px",
              width: "95%",
            }}
            onClick={() =>
              setSelectedPerson({ name: "", seat: "", plusOne: null })
            }
          >
            {generateBackMessage(selectedPerson)}
          </Button>
        )}
      </div>

      {selectedPerson.name && (
        <SeatingDiagram
          selectedPerson={selectedPerson}
        />
      )}

    </div>
  );
}

export default App;
