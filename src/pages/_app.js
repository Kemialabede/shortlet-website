import Cursor from "@/components/cursor";
import Layout from "@/components/layout";
import PageLoader from "@/components/loader/pageLoader";
import "@/styles/globals.css";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // matches loader duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      {loading ? <PageLoader /> : null}
      {/* <Cursor /> */}
      {!loading && <Component {...pageProps} />}
    </Layout>
  );
}
