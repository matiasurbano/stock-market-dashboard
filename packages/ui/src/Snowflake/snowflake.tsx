"use client";
import { Score } from "@repo/types";
import { useMemo } from "react";
import {
  Label,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import * as styles from "./Snowflake.css";

const calculateColorFromTotalScore = (totalScore: number) => {
  const MAX_SCORE = 30;
  const hue = (totalScore / MAX_SCORE) * 120;
  return `hsl(${hue}, 100%, 50%)`;
};

const getGraphData = (score: Score) => [
  {
    subject: "Valuation",
    successfulChecks: score.value,
  },
  {
    subject: "Future Growth",
    successfulChecks: score.future,
  },
  {
    subject: "Past Performance",
    successfulChecks: score.past,
  },
  {
    subject: "Financial health",
    successfulChecks: score.health,
  },
  {
    subject: "Dividend",
    successfulChecks: score.income,
  },
];

type SnowflakeProps = {
  score: Score;
};

export const Snowflake: React.FC<SnowflakeProps> = ({ score }) => {
  const chartData = useMemo(() => getGraphData(score), [score]);
  const fillColor = useMemo(
    () => calculateColorFromTotalScore(score.total),
    [score.total]
  );

  return (
    <>
      <ResponsiveContainer aspect={1} width={"100%"}>
        <RadarChart
          outerRadius={"80%"}
          data={chartData}
          style={{ fontSize: "12px" }}
        >
          <PolarGrid gridType="circle" />
          <PolarAngleAxis dataKey="subject" orientation="outer">
            <Label position="outside" />
          </PolarAngleAxis>
          {/* <PolarRadiusAxis angle={30} domain={[0, 150]} /> */}
          <Radar
            dataKey="successfulChecks"
            fill={fillColor}
            fillOpacity={0.6}
            stroke="#2f2e42"
          />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
};
