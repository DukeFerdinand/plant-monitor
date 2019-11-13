import feather from "feather-icons";

export interface Icons {
  home: string;
  alert: string;
  "cloud-drizzle": string;
  "alert-circle": string;
  activity: string;
}

export default {
  home: feather.icons["home"].toSvg(),
  alert: feather.icons["alert-circle"].toSvg(),
  "cloud-drizzle": feather.icons["cloud-drizzle"].toSvg(),
  "alert-circle": feather.icons["alert-circle"].toSvg(),
  activity: feather.icons["cloud-drizzle"].toSvg()
} as Icons;
