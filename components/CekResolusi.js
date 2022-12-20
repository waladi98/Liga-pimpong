import MediaQuery from "react-responsive";
import Login from "../pages/auth/login";
const CekResolusi = () => (
  <>
    <MediaQuery minWidth={1224}>
      <Login />
      <MediaQuery minWidth={1824}></MediaQuery>
    </MediaQuery>
  </>
);

export default CekResolusi;
