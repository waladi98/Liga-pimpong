import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
const LayoutGuest = (props) => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.title}</title>
      </Head>
      <div className="my-8">{props.children}</div>
    </div>
  );
};

export default LayoutGuest;
