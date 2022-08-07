import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { czeCocktails, engCocktails, polCocktails } from "../constants/drinks";
import { IDrink } from "../interfaces/drinks";
import { IPerson } from "../interfaces/person";

export interface IDrinkMenuProps {
  open: boolean;
  onClose: () => void;
  person: IPerson;
}

export const DrinksMenu = ({ open, onClose, person }: IDrinkMenuProps) => {
  const generateTitle = (person: IPerson) => {
    if (person.lang === "ENG") {
      return "Cocktail Menu";
    } else if (person.lang === "CZ") {
      return "Koktejl Menu";
    } else {
      return "Menu koktajli";
    }
  };

  const generateCloseButtonText = (person: IPerson) => {
    if (person.lang === "ENG") {
      return "Close";
    } else if (person.lang === "CZ") {
      return "Zavřít";
    } else {
      return "Zamknij";
    }
  };

  const chooseMenu = (person: IPerson) => {
    if (person.lang === "ENG") {
      return generateMenu(engCocktails);
    } else if (person.lang === "CZ") {
      return generateMenu(czeCocktails);
    } else {
      return generateMenu(polCocktails);
    }
  };

  const generateMenu = (cocktails: IDrink[]) => {
    return cocktails.map((cocktail) => (
      <div style={{ padding: "10px", minWidth: "50vh"}}>
        <Typography variant="h6">{cocktail.name}</Typography>
        <Typography variant="caption" style={{ paddingLeft: "10px", fontWeight: 400 }}>{cocktail.details}</Typography>
      </div>
    ));
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{generateTitle(person)}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <div>{chooseMenu(person)}</div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} autoFocus>
          {generateCloseButtonText(person)}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
