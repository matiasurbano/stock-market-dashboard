"use client";
// import { useMemo } from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

// import { ScoreResponse } from "../../server/SimplyWallStreet/types";
// import * as styles from "./snowflakeScoreGraph.css";

// const getGraphData = (score: ScoreResponse) => [
//   {
//     subject: "Valuation",
//     successfulChecks: score.valuation,
//   },
//   {
//     subject: "Future Growth",
//     successfulChecks: score.futureGrowth,
//   },
//   {
//     subject: "Past Performance",
//     successfulChecks: score.pastPerformance,
//   },
//   {
//     subject: "Financial health",
//     successfulChecks: score.financialHealth,
//   },
//   {
//     subject: "Dividend",
//     successfulChecks: score.dividend,
//   },
// ];

const calculateColorFromTotalScore = (totalScore: number) => {
  const MAX_SCORE = 30;
  const hue = (totalScore / MAX_SCORE) * 120;
  return `hsl(${hue}, 100%, 50%)`;
};

// type SnowflakeScoreProps = {
//   score: ScoreResponse;
// };

const chartData = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

// export const SnowflakeScore: React.FC<SnowflakeScoreProps> = ({ score }) => {
export const SnowflakeScore: React.FC = () => {
  //   const chartData = useMemo(() => getGraphData(score), [score]);
  //   const fillColor = useMemo(
  //     () => calculateColorFromTotalScore(score.total),
  //     [score.total]
  //   );

  return (
    <>
      <ResponsiveContainer aspect={1} width={"100%"}>
        <RadarChart outerRadius={"80%"} data={chartData}>
          {/* <PolarGrid gridType="circle" />
          <Radar
            dataKey="successfulChecks"
            fill={fillColor}
            fillOpacity={0.6}
          /> */}
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Radar
            name="Lily"
            dataKey="B"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
};
