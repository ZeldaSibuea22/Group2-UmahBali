import "../style/App.css";
import Headers from "../layouts/header/header";
import Layout from "../layouts";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function App() {
  return (
    <Layout>
      <SignUp />
    </Layout>
  );
}

export default App;
