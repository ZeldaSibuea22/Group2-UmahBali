import "../style/App.css";
import Header from "../layouts/header/header";
import Layout from "../layouts";
import Userpage from "./Userpage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function App() {
  return (
    <Layout>
      <SignUp />
      <SignIn />
    </Layout>
  );
}

export default App;
