import type { NextPage } from "next";
import Layout from "../components/Layout";
import Jumbotron from "../components/beranda/Jumbotron";
import About from "../components/beranda/About";
import Galerry from "../components/beranda/Galerry";
import Testimoni from "../components/beranda/Testimoni";
import Partner from "../components/beranda/Partner";
import Login from "./auth/login";
import CekResolusi from "../components/CekResolusi";
import Daftar from "./layanan/daftar";
const Home: NextPage = () => {
  return (
    <Layout title="Beranda">
      <div className="container ">
        <Daftar />
      </div>
    </Layout>
  );
};

export default Home;
