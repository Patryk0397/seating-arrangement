import * as React from "react";
import { Button, Box } from "@mui/material";
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
    lang: "PL",
  });

  const [mode, setMode] = React.useState("seating");
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [menu, setMenu] = React.useState("");

  const generateBackMessage = (person: IPerson) => {
    if (person.lang === "ENG") {
      return "Back";
    } else if (person.lang === "CZ") {
      return "Zpět";
    } else {
      return "Wróć";
    }
  };

  const generateModeMessage = (person: IPerson) => {
    if (mode === "seating") {
      if (person.lang === "ENG") {
        return "Timeline";
      } else if (person.lang === "CZ") {
        return "plán";
      } else {
        return "Harmonogram";
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

  const generateCocktailMessage = (person: IPerson) => {
    if (person.lang === "ENG") {
      return "Cocktails";
    } else if (person.lang === "CZ") {
      return "Koktejly";
    } else {
      return "Koktajle";
    }
  };

  const generateShotMessage = (person: IPerson) => {
    if (person.lang === "ENG") {
      return "Shots";
    } else if (person.lang === "CZ") {
      return "Nápoje";
    } else {
      return "Shoty";
    }
  };

  return (
    <div
      style={{
        width: "100%",
        paddingTop: "45%",
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
                fontSize: "10px",
              }}
              onClick={() => {
                setSelectedPerson({
                  name: "",
                  seat: "",
                  plusOne: null,
                  lang: "PL",
                });
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
                fontSize: "10px",
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
                fontSize: "10px",
              }}
              onClick={() => {
                setMenuOpen(true);
                setMenu("cocktails");
              }}
            >
              {generateCocktailMessage(selectedPerson)}
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: "white",
                color: "black",
                marginLeft: "10px",
                marginBottom: "5px",
                fontSize: "10px",
              }}
              onClick={() => {
                setMenuOpen(true);
                setMenu("shots");
              }}
            >
              {generateShotMessage(selectedPerson)}
            </Button>
          </div>
        )}
      </div>
      {!selectedPerson.name && (
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "20px" }}>
          <img
            style={{
              width: "90%",
              borderRadius: "5px",
            }}
            src={require(`./image.png`)}
            alt={""}
          />
        </div>
      )}

      {selectedPerson.name && mode === "seating" && (
        <SeatingDiagram selectedPerson={selectedPerson} />
      )}
      {selectedPerson.name && mode === "timeline" && (
        <TimelineComponent selectedPerson={selectedPerson}></TimelineComponent>
      )}
      <DrinksMenu
        open={menuOpen}
        menuType={menu}
        onClose={() => {
          setMenuOpen(false);
          setMenu("");
        }}
        person={selectedPerson}
      ></DrinksMenu>
    </div>
  );
}

export default App;
