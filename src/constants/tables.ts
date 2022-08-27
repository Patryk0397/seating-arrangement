export interface ISeat {
  name: string;
};

export type ITable = {
  [key: string]: String[];
}

export const tables: ITable = {
  1: [ "B-1", "B-2", "B-3", "B-4", "B-5", "B-6", "B-7", "B-8" ],
  2: [ "B-9", "B-10", "B-11", "B-12", "B-13", "B-14", "B-15", "B-16" ],
  3: [ "B-17", "B-18", "B-19", "B-20", "B-21", "B-22", "B-23", "B-24" ],
  4: [ "B-25", "B-26", "B-27", "B-28", "B-29", "B-30", "B-31", "B-32" ],
  5: [ "A-1", "A-2", "A-3", "A-4", "A-5", "A-6", "A-7", "A-8" ],
  6: [ "A-9", "A-10", "A-11", "A-12", "A-13", "A-14", "A-15", "A-16" ],
  7: [ "A-18", "A-19", "A-20", "A-21", "A-22", "A-23", "A-24", "A-25" ],
  8: [ "A-26", "A-27", "A-28", "A-29", "A-30", "A-31", "A-32", "A-33" ],
};
