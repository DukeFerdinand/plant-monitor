import React from "react";
import icons, { Icons } from "../assets/icons";

interface IconProps {
  iconName: keyof Icons;
  className?: string;
}

export const Icon: React.FunctionComponent<IconProps> = ({
  iconName,
  className
}) => {
  return (
    //
    <i
      className={`icon ${className}`}
      dangerouslySetInnerHTML={{ __html: icons[iconName] }}
    ></i>
  );
};
