"use client";
import {
  Label,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

const calculateColorFromTotalScore = (totalScore: number) => {
  const MAX_SCORE = 30;
  const hue = (totalScore / MAX_SCORE) * 120;
  return `hsl(${hue}, 100%, 50%)`;
};

export const SnowflakeLoading: React.FC = () => {
  const chartData = [
    {
      subject: "Value",
      successfulChecks: 0,
    },
    {
      subject: "Fut.",
      successfulChecks: 0,
    },
    {
      subject: "Past",
      successfulChecks: 0,
    },
    {
      subject: "Health",
      successfulChecks: 0,
    },
    {
      subject: "Div.",
      successfulChecks: 0,
    },
  ];

  const fillColor = calculateColorFromTotalScore(30);

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
