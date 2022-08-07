import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { czeCocktails, czeShots, engCocktails, engShots, polCocktails, polShots } from "../constants/drinks";
import { IDrink } from "../interfaces/drinks";
import { IPerson } from "../interfaces/person";

export interface IDrinkMenuProps {
  open: boolean;
  onClose: () => void;
  person: IPerson;
  menuType: string;
}

export const DrinksMenu = ({ open, onClose, person, menuType }: IDrinkMenuProps) => {
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
    let menu;
    if (person.lang === "ENG") {
      menu = menuType === "cocktails" ? engCocktails : engShots;
      return generateMenu(menu);
    } else if (person.lang === "CZ") {
      menu = menuType === "cocktails" ? czeCocktails : czeShots;
      return generateMenu(menu);
    } else {
      menu = menuType === "cocktails" ? polCocktails : polShots;
      return generateMenu(menu);
    }
  };

  const generateMenu = (drinks: IDrink[]) => {
    return drinks.map((drink) => (
      <div style={{ padding: "10px", minWidth: "100%"}}>
        <Typography variant="h6">{drink.name}</Typography>
        <Typography variant="caption" style={{ paddingLeft: "10px", fontWeight: 400 }}>{drink.details}</Typography>
      </div>
    ));
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{ minWidth: "50vh" }}
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
