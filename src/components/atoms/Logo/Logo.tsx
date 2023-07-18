import { FC } from "react";

import { Img, A, CoreUIProps } from "@/components/electrons";
import styles from "./Logo.module.scss";

export interface LogoProps extends CoreUIProps {
 linkProps?: {
  href?: string;
 };
 ImgProps?: {
  src?: string;
  width?: string;
 };
}

export const Logo: FC<LogoProps> = ({ linkProps, ImgProps }) => {
 return (
  <A {...linkProps} className={styles.logo}>
   <Img {...ImgProps} className={styles.logo__img} />
  </A>
 );
};
