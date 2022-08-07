import * as React from "react";
import { Button } from "@mui/material";
import { friends, family, main } from "./constants/seating";
import BasicSelect from "./components/Select";
import { IPerson } from "./interfaces/person";
import SeatingDiagram from "./components/SeatingDiagram";
import { Header } from "./components/Header";
import { TimelineComponent } from "./components/Timeline";
import { DrinksMenu } from "./components/DrinksMenu";

function App() {
  const names = [...friends, ...family, ...main];

  const [selectedPerson, setSelectedPerson] = React.useState({
    name: "",
    seat: "",
    plusOne: null,
    lang: "PL"
  });

  const [mode, setMode] = React.useState("seating");
  const [ menuOpen, setMenuOpen ] = React.useState(false);

  const generateBackMessage = (person: IPerson) => {
    if (person.lang === "ENG") {
      return "Go Back";
    } else if (person.lang === "CZ") {
      return "Jít zpět";
    } else {
      return "Wróć";
    }
  };

  const generateModeMessage = (person: IPerson) => {
    if (mode === "seating") {
      if (person.lang === "ENG") {
        return "Timeline";
      } else if (person.lang === "CZ") {
        return "Časová osa";
      } else {
        return "Oś czasu";
      }
    } else {
      if (person.lang === "ENG") {
        return "Seating";
      } else if (person.lang === "CZ") {
        return "uspořádání";
      } else {
        return "Rozsiedzenie";
      }
    }
  };

  const generateMenuMessage = (person: IPerson) => {
    if (person.lang === "ENG") {
      return "Cocktail Menu";
    } else if (person.lang === "CZ") {
      return "Koktejl Menu";
    } else {
      return "Menu koktajli";
    }
  };

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Header selectedPerson={selectedPerson}></Header>
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
          <div style={{ display: "flex", flex: "1 1 0px" }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "white",
                color: "black",
                marginLeft: "10px",
                marginBottom: "5px",
              }}
              onClick={() => {
                setSelectedPerson({ name: "", seat: "", plusOne: null, lang: "PL" })
                setMode("seating");
              }}
            >
              {generateBackMessage(selectedPerson)}
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: "white",
                color: "black",
                marginLeft: "10px",
                marginBottom: "5px",
              }}
              onClick={() =>
                setMode(mode === "seating" ? "timeline" : "seating")
              }
            >
              {generateModeMessage(selectedPerson)}
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: "white",
                color: "black",
                marginLeft: "10px",
                marginBottom: "5px",
              }}
              onClick={() =>
                setMenuOpen(true)
              }
            >
              {generateMenuMessage(selectedPerson)}
            </Button>
          </div>
        )}
      </div>

      {selectedPerson.name && mode === "seating" && (
        <SeatingDiagram selectedPerson={selectedPerson} />
      )}
      {selectedPerson.name && mode === "timeline" && (
      <TimelineComponent selectedPerson={selectedPerson}></TimelineComponent>
      )}
      <DrinksMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        person={selectedPerson}
      ></DrinksMenu>
    </div>
  );
}

export default App;
