import React from "react";
// import { wrapper } from "../components/store"; // ini dari yang web
import { wrapper } from "../redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
