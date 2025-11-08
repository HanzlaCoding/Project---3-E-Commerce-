import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const RegisterAnime = () => {
  return (
    <DotLottieReact
      src="https://lottie.host/3fafe216-ac5e-42ce-bae6-2780112a2aa2/rNjUF7MuUx.lottie"
      style={{ backgroundColor: "#f9fafb", fontSize: "2vw" }}
      loop
      autoplay
    />
  );
};

const LoginAnime = () => {
  return (
    <>
      <DotLottieReact
        src="https://lottie.host/13317aa0-8332-4fe0-b43e-bbb3153afc05/VFsWFDcmzV.lottie"
        style={{ backgroundColor: "#f9fafb", fontSize: "2vw" }}
        loop
        autoplay
      />
      ;
    </>
  );
};

export { RegisterAnime, LoginAnime };
