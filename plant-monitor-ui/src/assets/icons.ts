import feather from "feather-icons";

export interface Icons {
  home: string;
  alert: string;
}

export default {
  home: feather.icons["home"].toSvg(),
  alert: feather.icons["alert-circle"].toSvg()
} as Icons;
