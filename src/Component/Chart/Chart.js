import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = () => {
  const LoadData = useLoaderData();
  const Topics = LoadData.data;
  console.log(Topics);
  return (
    <div className="mt-40">
      <ResponsiveContainer width="95%" height={400}>
        <BarChart
          data={Topics}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <Bar dataKey="total" fill="#8884d8" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
