import { tables } from "../constants/tables";
import { IPerson } from "../interfaces/person";

export const getTableNumber = (person: IPerson) => {
  let tableNumber = 0;
  Object.keys(tables).forEach((key) => {
    if (tables[key].includes(person.seat)) {
      tableNumber = Number(key);
    }
  });

  return tableNumber;
};
