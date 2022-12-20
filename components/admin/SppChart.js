import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Sudah Bayar", "Belum Bayar"],
  datasets: [
    {
      data: [80, 20],
      backgroundColor: ["#FF8742", "#DCDCDC"],
      hoverBackgroundColor: ["#FFC29F"],
    },
  ],
  options: {
    responsive: true,
  },
};

export default () => (
  <div className="  p-10  ">
    <Doughnut data={data} width={50} height={50} />

    <div className="flex flex-wrap items-center justify-center pt-5">
      <a className="relative  bg-orange-500   text-white font-semibold px-10 py-2  rounded-lg hover:shadow-purple-400 hover:bg-purple-300 cursor-pointer  ">
        Lihat Detail
      </a>
    </div>
  </div>
);
