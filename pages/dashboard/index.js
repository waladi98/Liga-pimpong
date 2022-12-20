import React from "react";
import LayoutAdmin from "../../components/LayoutAdmin";
import CardRekap from "../../components/admin/CardRekap";
import { rekapSiswa } from "../../components/constants";
import BarChart from "../../components/admin/BarChart";
import DougNut from "../../components/admin/DougNut";
import SppChart from "../../components/admin/SppChart";
const dashboard = () => {
  return (
    <LayoutAdmin title="Dashboard">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <CardRekap datas={rekapSiswa} />

      <div className="flex items-center justify-center bg-white shadow-sm rounded-lg ">
        <BarChart />
      </div>
      <div className="flex items-center justify-between pt-5">
        <div className="text-center  bg-white shadow-sm rounded-lg w-1/2 mr-3">
          <DougNut />
        </div>
        <div className="text-center  bg-white shadow-sm rounded-lg w-1/2 ml-3">
          <SppChart />
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default dashboard;
