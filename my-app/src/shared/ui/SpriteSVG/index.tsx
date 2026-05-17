// src/shared/components/Icon/Icon.tsx
import { memo } from "react";
import styles from "./index.module.scss";

export type IconName = "favorites" | "basket" | "order";

interface IconProps {
  name: IconName;
  size?: number | string;
  color?: string;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const Icon = memo(
  ({ name, size = 24, color, className = "", onClick, style }: IconProps) => {
    const iconSize = typeof size === "number" ? `${size}px` : size;

    return (
      <svg
        className={`${styles.icon} ${className}`}
        style={{
          width: iconSize,
          height: iconSize,
          color: color,
          ...style,
        }}
        onClick={onClick}
        aria-hidden={!onClick}
      >
        <use href={`#icon-${name}`} />
      </svg>
    );
  },
);

Icon.displayName = "Icon";
