import type { ReactElement } from "react";
import styles from "./index.module.scss";

interface ContentContainerProps {
  children: ReactElement;
  style?: string;
}

const ContentContainer = ({ children, style }: ContentContainerProps) => {
  return <div className={`${styles.container} ${style}`}>{children}</div>;
};

export default ContentContainer;
