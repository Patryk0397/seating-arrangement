import * as React from "react";
import { getTableNumber } from "../utils/tables";
import { IPerson } from "../interfaces/person";

export default function WelcomeMessageComponent({
  selectedPerson,
  names,
}: any) {
  const generateMessage = (person: IPerson) => {
    const plusOne: IPerson | undefined = names.find(
      (i: IPerson) => i.seat === person.plusOne
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

    return (
      <div
        style={{
          height: "150px",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <h3>
          {(person.lang === "ENG" && `Hey, Thanks for coming!`)}
          {(person.lang === "CZ" && `Ahoj, děkujeme za přijetí!`)}
          {(!person.lang &&
            `Hej, dziękujemy za przybycie!`)}
        </h3>
        <p>
          {person.lang === "ENG" &&
            `You are sitting at table #${getTableNumber(
              selectedPerson
            )} at seat #${person.seat.split("-")[1]}`}
          {person.lang === "CZ" &&
            `Sedíte na stolu #${getTableNumber(selectedPerson)} na sedadle #${
              person.seat.split("-")[1]
            }`}
          {!person.lang &&
            `Siedzisz na stole #${getTableNumber(selectedPerson)} na miejscu #${
              person.seat.split("-")[1]
            }`}
        </p>
        {person.lang === "ENG" && plusOne && (
          <p>{`${plusOne.name} is sitting ${plusOneDirection}`}</p>
        )}
        {person.lang === "CZ" && plusOne && (
          <p>{`${plusOne.name} sedí ${plusOneDirection}`}</p>
        )}
        {person.lang !== "ENG" && person.lang !== "CZ" && plusOne && (
          <p>{`${plusOne.name} siedzi ${plusOneDirection}`}</p>
        )}
      </div>
    );
  };

  return <>{generateMessage(selectedPerson)}</>;
}
