"use client";
import { Score } from "@repo/types";
import { useMemo } from "react";
import {
  Label,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
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
    subject: "Value",
    successfulChecks: score.value,
  },
  {
    subject: "Fut.",
    successfulChecks: score.future,
  },
  {
    subject: "Past",
    successfulChecks: score.past,
  },
  {
    subject: "Health",
    successfulChecks: score.health,
  },
  {
    subject: "Div.",
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
      <ResponsiveContainer aspect={1} width="100%">
        <RadarChart data={chartData} style={{ fontSize: "12px" }}>
          <PolarGrid gridType="circle" />
          <PolarAngleAxis dataKey="subject" orientation="outer">
            <Label />
          </PolarAngleAxis>
          <Radar
            dataKey="successfulChecks"
            fill={fillColor}
            fillOpacity={0.8}
            stroke={fillColor}
            strokeWidth={3}
          />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
};
