import React from "react";

const CardRekap = (props) => {
  return (
    <div className="flex items-center justify-between py-5">
      {props.datas.map((data) => {
        return (
          <div
            key={data.id}
            className="flex items-center bg-white py-5 max-w-xl px-8 rounded-2xl shadow-sm"
          >
            <div className="mr-24 ">
              <h1>{data.title}</h1>
              <span className="font-semibold text-2xl">{data.value}</span>
            </div>
            <div>
              <img src="../../icon/siswa_aktif.svg" alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardRekap;
