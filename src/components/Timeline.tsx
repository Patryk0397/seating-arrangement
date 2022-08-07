import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { TimelineOppositeContent } from "@mui/lab";
import { Typography } from "@mui/material";

export interface ITimelineItem {
  time: string;
  shortcut?: string;
  title: any;
}

export const TimelineComponent = ({ selectedPerson }: any) => {
  const timeLineItems: ITimelineItem[] = [
    {
      time: "16:30",
      title: {
        ENG: "Ceremony",
        CZ: "Svatba",
        PL: "Ślub",
      },
    },
    {
      time: "16:45",
      title: {
        PL: "Toast z szampanem",
        CZ: "Toast s šampaňským",
        ENG: "Champagne toast",
      },
    },
    {
      time: "16:50",
      title: {
        PL: "Zyczenia i zdjecia",
        CZ: "Přání a fotky",
        ENG: "Wishes and photos",
      },
    },
    {
      time: "17:30",
      title: {
        PL: "Zaproszenie na kolację",
        CZ: "Pozvání na večeři",
        ENG: "Invitation to dinner",
      },
    },
    {
      time: "18:30",
      title: {
        PL: "Pierwszy Taniec",
        CZ: "První tanec",
        ENG: "First dance",
      },
    },
    {
      time: "21:00",
      title: {
        PL: "Tort",
        CZ: "Tort",
        ENG: "Cake",
      },
    },
    {
      time: "23:45",
      title: {
        PL: "Zimne Ognie",
        CZ: "Zimní oheň",
        ENG: "Sparklers",
      },
    },
    {
      time: "00:00",
      title: {
        PL: "Oczepiny",
        CZ: "Hry",
        ENG: "Activities",
      },
    },
    {
      time: "01:00",
      title: {
        PL: "Hot Meal",
        CZ: "Horké jídlo",
        ENG: "Hot meal",
      },
    },
    {
      time: "04:00",
      title: {
        PL: "Zakonczenie",
        CZ: "Konec",
        ENG: "End",
      },
    },
  ];

  return (
    <Timeline position="alternate">
      {timeLineItems.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{ m: "0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {item.time}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="caption" sx={{ padding: "4px" }}>
              {selectedPerson.lang === "ENG"
                ? item.title.PL
                : selectedPerson.lang === "CZ"
                ? item.title.CZ
                : item.title.PL}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};
