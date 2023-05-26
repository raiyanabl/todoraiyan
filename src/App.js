import React from "react";
import { Toaster } from "react-hot-toast";
import AppContent from "./Components/AppContent";
import AppHeader from "./Components/AppHeaders";
import PageTitle from "./Components/PageTitle";
import styles from "./styles/modules/app.module.scss";

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>Whats the plan for today?</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: "1.4rem",
          },
        }}
      />
    </>
  );
}

export default App;
