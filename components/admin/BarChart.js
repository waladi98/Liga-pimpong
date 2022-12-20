import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const data = {
  labels: [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ],
  datasets: [
    {
      label: "# Kehadiran",
      data: [120, 190, 233, 298, 232, 233, 100, 230, 293, 289, 289, 300],
      backgroundColor: [
        "#027FFF",
        "#027FFF",
        "#027FFF",
        "#027FFF",
        "#027FFF",
        "#027FFF",
      ],

      borderWidth: 1,
    },
  ],
};

const BarChart = () => {
  return (
    <div className="px-2 py-5">
      <h2 className="text-center font-semibold text-xl">
        Statistik Kehadiran Siswa Tahun 2022/2023
      </h2>
      <Bar className="m-2" data={data} width={1200} height={200} />
    </div>
  );
};

export default BarChart;
