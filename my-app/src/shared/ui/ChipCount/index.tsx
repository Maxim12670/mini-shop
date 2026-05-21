import styles from "./index.module.scss";

export const ChipCount = ({
  count,
  style,
}: {
  count: number;
  style?: string;
}) => {
  return <div className={`${styles.chip} ${style}`}>{count}</div>;
};
