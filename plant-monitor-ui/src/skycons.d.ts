declare module "react-skycons" {
  import React from "react";
  interface ISkyconProps {
    color: string;
    icon: string;
    autoplay: boolean;
  }
  const Skycons: React.FunctionComponent<ISkyconProps>;
  export default Skycons;
}
