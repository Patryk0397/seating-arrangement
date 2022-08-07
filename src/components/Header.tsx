import { Typography } from "@mui/material";

export const Header = ({ selectedPerson }: any) => {
  return (
    <div style={{
      width: "100%",
      paddingBottom: "10px",
      borderBottom: selectedPerson.name && "1px solid #b8b7b6",
    }}>
      <Typography
        sx={{
          fontFamily: "Parisienne",
          fontSize: "50px",
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
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
  );
};
