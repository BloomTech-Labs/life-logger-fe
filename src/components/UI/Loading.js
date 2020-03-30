import React from 'react';
import Loader from 'react-loader-spinner';

export default function Loading () {
  return (
    <Loader
      type="Bars"
      color="#09c6f9"
      height={90}
      width={90}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        height: "100vh",
      }}
    />
  );
}