import React from "react";
import styles from "./styles.css";

const Spinner = props => (
  <>
    <style>{styles}</style>
    <div className="lds-spinner">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </>
);

export default Spinner;
