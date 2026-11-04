import "../styles/globals.css";
import AppContext from "../components/AppContextFolder/AppContext";
import { useRef, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const LegacyFonts = dynamic(() => import("../components/Seo/LegacyFonts"));

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const isDemo = ["/test", "/typing", "/userdatapuller"].includes(pathname);
  const timerCookie = useRef(null);
  const windowSizeTrackerRef = useRef(null);
  const mousePositionRef = useRef(null);
  const [sharedState, setSharedState] = useState({
    portfolio: {
      NavBar: {
        IntervalEvent: null,
        scrolling: null,
        scrollSizeY: null,
      },
      Scrolling:{
        IntervalEvent:null
      }
    },
    userdata: {
      timerCookieRef: timerCookie,
      windowSizeTracker: windowSizeTrackerRef,
      mousePositionTracker: mousePositionRef,
    },
    typing: {
      keyboardEvent: null,
      eventInputLostFocus: null,
    },
    finishedLoading: false,
  });
  return (
    <AppContext.Provider value={{ sharedState, setSharedState }}>
      <Head>
        {pathname !== "/" && <meta name="robots" content="noindex, follow" key="robots" />}
      </Head>
      {isDemo && <LegacyFonts />}
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
