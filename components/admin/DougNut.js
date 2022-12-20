import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Hadir", "Sakit", "Terlambat", "izin", "Bolos"],
  datasets: [
    {
      data: [300, 50, 100, 44, 30],
      backgroundColor: ["#90BE6D", "#F9C74F", "#F81EE2", "#027FFF", "#FB4141"],
      hoverBackgroundColor: [
        "#DCDCDC",
        "#DCDCDC",
        "#DCDCDC",
        "#DCDCDC",
        "#DCDCDC",
      ],
    },
  ],
};

export default () => (
  <div className="  p-10  ">
    <h1 className="text-center font-semibold my-2 text-xl">
      Statistik Status Kehadiran siswa{" "}
    </h1>
    <Doughnut data={data} width={50} height={50} />
  </div>
);
