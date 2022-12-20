import React from "react";
import LayoutAdmin from "../../../components/LayoutAdmin";
const edit = () => {
  return (
    <LayoutAdmin title="Edit Siswa">
      <div className="bg-white p-5 rounded-md drop-shadow-md">
        <h1 className="text-center">Tambah siswa</h1>
        <div class="border-b border-gray-200 ">
          <nav class="flex space-x-2" aria-label="Tabs" role="tablist">
            <button
              type="button"
              class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 active"
              id="tabs-with-underline-item-1"
              data-hs-tab="#tabs-with-underline-1"
              aria-controls="tabs-with-underline-1"
              role="tab"
            >
              Informasi Umum
            </button>
            <button
              type="button"
              class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600"
              id="tabs-with-underline-item-2"
              data-hs-tab="#tabs-with-underline-2"
              aria-controls="tabs-with-underline-2"
              role="tab"
            >
              Domisili
            </button>
            <button
              type="button"
              class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600"
              id="tabs-with-underline-item-3"
              data-hs-tab="#tabs-with-underline-3"
              aria-controls="tabs-with-underline-3"
              role="tab"
            >
              Orang Tua
            </button>
          </nav>
        </div>

        <div class="mt-3">
          <div
            id="tabs-with-underline-1"
            role="tabpanel"
            aria-labelledby="tabs-with-underline-item-1"
          >
            <form>
              <div class="grid grid-rows-3 grid-flow-col gap-4  ">
                <div class="row-span-3  w-full">
                  <div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Nama Siswa
                      </label>
                      <input
                        type="text"
                        class="py-2 px-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                        placeholder="..."
                      />
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Periode Masuk
                      </label>
                      <select class="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ">
                        <option selected>-- Pilih Periode Masuk --</option>
                        <option>2017/2018</option>
                        <option>2018/2019</option>
                        <option>2019/2020</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Tahun Kurikulum
                      </label>
                      <select class="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ">
                        <option selected>-- Pilih Tahun Kurikulum --</option>
                        <option>Kurikulum 2018</option>
                        <option>Kurikulum 2019</option>
                        <option>Kurikulum 2020</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row-span-3  w-full">
                  <div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Kelas
                      </label>
                      <select class="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ">
                        <option selected>-- Pilih Kelas--</option>
                        <option>Kelas A</option>
                        <option>Kelas B</option>
                        <option>Kelas C</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Tanggal Masuk
                      </label>
                      <input
                        type="date"
                        class="py-2 px-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                      />
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Status?
                      </label>
                      <select class="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ">
                        <option selected>-- Status?--</option>
                        <option>Aktif</option>
                        <option>Non-Aktif</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-2">
                <h6 className="font-semibold text-blue-600">Umum</h6>
                <hr className="text-blue" />
              </div>
              <div class="grid grid-rows-3 grid-flow-col gap-4  ">
                <div class="row-span-3  w-full">
                  <div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Jenis Kelamin
                      </label>
                      <select class="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ">
                        <option selected>-- Pilih Jenis Kelamin?--</option>
                        <option>Laki - Laki</option>
                        <option>Perempuan</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Tempat Lahir
                      </label>
                      <input
                        type="text"
                        class="py-2 px-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                        placeholder="Cth : Jakarta"
                      />
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Tanggal Lahir
                      </label>
                      <input
                        type="date"
                        class="py-2 px-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                      />
                    </div>
                  </div>
                </div>
                <div class="row-span-3  w-full">
                  <div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Agama
                      </label>
                      <select class="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ">
                        <option selected>-- Pilih Agama--</option>
                        <option>Islam</option>
                        <option>Kristen</option>
                        <option>Hindu</option>
                        <option>Budha</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-2">
                <h6 className="font-semibold text-blue-600">Kontak</h6>
                <hr className="text-blue" />
              </div>
              <div class="grid grid-rows-3 grid-flow-col gap-4  ">
                <div class="row-span-3  w-full">
                  <div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        No. Telepon
                      </label>
                      <input
                        type="text"
                        class="py-2 px-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                        placeholder="Cth: 022xxxx"
                      />
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        No. Handphone
                      </label>
                      <input
                        type="text"
                        class="py-2 px-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                        placeholder="Cth: 082xxxx"
                      />
                    </div>
                  </div>
                </div>
                <div class="row-span-3  w-full">
                  <div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        class="py-2 px-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                        placeholder="Cth: xxx@gmail.com"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center py-5">
                <button
                  type="button"
                  class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white w-1/6"
                >
                  Simpan
                </button>
                <span className="mx-2"></span>
                <button
                  type="button"
                  class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md  border-transparent font-semibold border-2 border-sky-500 text-sky-500 w-1/6"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
          <div
            id="tabs-with-underline-2"
            class="hidden"
            role="tabpanel"
            aria-labelledby="tabs-with-underline-item-2"
          >
            <form>
              <div class="grid grid-rows-3 grid-flow-col gap-4  ">
                <div class="row-span-3  w-full">
                  <div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Provinsi
                      </label>
                      <select class="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ">
                        <option selected>-- Pilih Provinsi --</option>
                        <option>Jawa Barat</option>
                        <option>Jawa Timur</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Kota
                      </label>
                      <select class="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ">
                        <option selected>-- Pilih Kota --</option>
                        <option>Bandung</option>
                        <option>Jakarta</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Kecamatan
                      </label>
                      <select class="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ">
                        <option selected>-- Pilih Kecamatan --</option>
                        <option>Kec. Banjaran</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Kode Pos
                      </label>
                      <input
                        type="text"
                        class="py-2 px-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                        placeholder="Cth: 12345"
                      />
                    </div>
                  </div>
                </div>
                <div class="row-span-3  w-full">
                  <div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Status Tinggal
                      </label>
                      <select class="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ">
                        <option selected>-- Pilih Status Tinggal--</option>
                        <option>Rumah Sendiri</option>
                        <option>Sewa</option>
                        <option>Dipinjam</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="w-full pr-2">
                        {" "}
                        <label
                          className="text-gray-800 font-semibold block my-1 text-md jus"
                          htmlFor="username"
                        >
                          RT
                        </label>
                        <input
                          type="text"
                          class="py-2 px-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                          placeholder="Cth: 00"
                        />
                      </div>
                      <div className="w-full  pl-2">
                        <label
                          className="text-gray-800 font-semibold block my-1 text-md"
                          htmlFor="username"
                        >
                          RW
                        </label>
                        <input
                          type="text"
                          class="py-2 px-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                          placeholder="Cth: 00"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Dusun
                      </label>
                      <input
                        type="date"
                        class="py-2 px-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                      />
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Desa/kelurahan
                      </label>
                      <input
                        type="date"
                        class="py-2 px-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label
                  className="text-gray-800 font-semibold block my-1 text-md"
                  htmlFor="username"
                >
                  Alamat
                </label>
                <textarea
                  class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                  rows="3"
                ></textarea>
              </div>
              <div className="flex justify-center items-center py-5">
                <button
                  type="button"
                  class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white w-1/6"
                >
                  Simpan
                </button>
                <span className="mx-2"></span>
                <button
                  type="button"
                  class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md  border-transparent font-semibold border-2 border-sky-500 text-sky-500 w-1/6"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
          <div
            id="tabs-with-underline-3"
            class="hidden"
            role="tabpanel"
            aria-labelledby="tabs-with-underline-item-3"
          >
            <form>
              <div className="w-full py-2">
                <h6 className="font-semibold text-blue-600">Biodata Ayah</h6>
                <hr className="text-blue" />
              </div>
              <div class="grid grid-rows-3 grid-flow-col gap-4  ">
                <div class="row-span-3  w-full">
                  <div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        class="py-2 px-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                        placeholder="..."
                      />
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        NIK
                      </label>
                      <input
                        type="text"
                        class="py-2 px-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                        placeholder="..."
                      />
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Tempat Lahir
                      </label>
                      <input
                        type="text"
                        class="py-2 px-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                        placeholder="Cth: Jakarta"
                      />
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Tanggal Lahir
                      </label>
                      <input
                        type="date"
                        class="py-2 px-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                      />
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Status Hidup
                      </label>
                      <select class="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ">
                        <option selected>-- Pilih Status Hidup --</option>
                        <option>Hidup</option>
                        <option>Wafat</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Status Kekerabatan
                      </label>
                      <select class="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ">
                        <option selected>-- Pilih Status Kekerabatan --</option>
                        <option>Ayah Kandung</option>
                        <option>Ayah Tiri</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row-span-3  w-full">
                  <div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Pendidikan
                      </label>
                      <select class="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ">
                        <option selected>-- Pilih status Pendidikan--</option>
                        <option>Sekolah Menengah Dasar (SD)</option>
                        <option>Sekolah Menengah Kejuruan (SMA)</option>
                        <option>Sarjana (S1)</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Pekerjaan
                      </label>
                      <select class="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ">
                        <option selected>-- Pilih status Pekerjaan--</option>
                        <option>Wiraswasta</option>
                        <option>TNI /Polri</option>
                        <option>DLL</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Penghasilan
                      </label>
                      <select class="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ">
                        <option selected>-- Status Penghasilan--</option>
                        <option>dibahawah RP. 500.000</option>
                        <option>RP.500.000 - RP.3.000.000</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        No. Telepon
                      </label>
                      <input
                        type="text"
                        class="py-2 px-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                        placeholder="Cth : 082xxx"
                      />
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        class="py-2 px-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                        placeholder="Cth : xxc@gmail.com"
                      />
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Alamat
                      </label>
                      <textarea
                        class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-2">
                <h6 className="font-semibold text-blue-600">Biodata Ibu</h6>
                <hr className="text-blue" />
              </div>
              <div class="grid grid-rows-3 grid-flow-col gap-4  ">
                <div class="row-span-3  w-full">
                  <div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        class="py-2 px-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                        placeholder="..."
                      />
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        NIK
                      </label>
                      <input
                        type="text"
                        class="py-2 px-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                        placeholder="..."
                      />
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Tempat Lahir
                      </label>
                      <input
                        type="text"
                        class="py-2 px-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                        placeholder="Cth: Jakarta"
                      />
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Tanggal Lahir
                      </label>
                      <input
                        type="date"
                        class="py-2 px-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                      />
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Status Hidup
                      </label>
                      <select class="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ">
                        <option selected>-- Pilih Status Hidup --</option>
                        <option>Hidup</option>
                        <option>Wafat</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Status Kekerabatan
                      </label>
                      <select class="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ">
                        <option selected>-- Pilih Status Kekerabatan --</option>
                        <option>Ayah Kandung</option>
                        <option>Ayah Tiri</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row-span-3  w-full">
                  <div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Pendidikan
                      </label>
                      <select class="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ">
                        <option selected>-- Pilih status Pendidikan--</option>
                        <option>Sekolah Menengah Dasar (SD)</option>
                        <option>Sekolah Menengah Kejuruan (SMA)</option>
                        <option>Sarjana (S1)</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Pekerjaan
                      </label>
                      <select class="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ">
                        <option selected>-- Pilih status Pekerjaan--</option>
                        <option>Wiraswasta</option>
                        <option>TNI /Polri</option>
                        <option>DLL</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Penghasilan
                      </label>
                      <select class="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ">
                        <option selected>-- Status Penghasilan--</option>
                        <option>dibahawah RP. 500.000</option>
                        <option>RP.500.000 - RP.3.000.000</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        No. Telepon
                      </label>
                      <input
                        type="text"
                        class="py-2 px-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                        placeholder="Cth : 082xxx"
                      />
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        class="py-2 px-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                        placeholder="Cth : xxc@gmail.com"
                      />
                    </div>
                    <div>
                      <label
                        className="text-gray-800 font-semibold block my-1 text-md"
                        htmlFor="username"
                      >
                        Alamat
                      </label>
                      <textarea
                        class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center py-5">
                <button
                  type="button"
                  class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white w-1/6"
                >
                  Simpan
                </button>
                <span className="mx-2"></span>
                <button
                  type="button"
                  class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md  border-transparent font-semibold border-2 border-sky-500 text-sky-500 w-1/6"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default edit;
