import React from "react";
import styles from "./AboutPage.module.css";
import { motion } from "framer-motion";
const AboutPage = () => {
  return (
    <motion.div
      style={{ margin: "50px 0 0 0" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles["main"]}>
        <h1>About Us</h1>
        <p>
          We are the members of the Geeky Crowds.By mixing our knowledge we made
          this completeley awesome projects
        </p>
      </div>
      <div className={styles["members"]}>
        <div className={styles["page"]}>
          <h4>Abhinay Sinha</h4>
          <img src={require("../images/profile/boy1.jpg")} alt="Profile" />
          <div className={styles["pmain"]}>
            <p>
              I am a very devoted person and always tries to think out of the
              box
              <br />
              email:
              <a href="mailto: abhinay.sinha_cs.aiml20@gla.ac.in">
                Abhinay Sinha
              </a>
            </p>
          </div>
        </div>
        <div className={styles["page"]}>
          <h4>Kshitij Agarwal</h4>
          <img src={require("../images/profile/boy3.jpg")} alt="Profile" />
          <div className={styles["pmain"]}>
            <p>
              I Am Energetic and Have a Positive Attitude.
              <br />
              email:
              <a href="mailto: kshitij.agarwal_cs.aiml20@gla.ac.in">
                Kshitij Agarwal
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
