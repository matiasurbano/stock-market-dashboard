"use client";
import { Score } from "@repo/types";
import { useMemo } from "react";
import { PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";

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
        <RadarChart outerRadius={"80%"} data={chartData}>
          <PolarGrid gridType="circle" />
          <Radar
            dataKey="successfulChecks"
            fill={fillColor}
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
};
