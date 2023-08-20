import { FC, useEffect, useState } from "react";
import styles from "./style.module.css";

interface DayComponentProps {
  date: string;
  value: number;
}

const DayComponent: FC<DayComponentProps> = ({ date, value }) => {
  const [color, setColor] = useState("rgba(237, 237, 237, 1)");
  useEffect(() => {
    if (value >= 1 && value <= 9) {
      setColor("rgba(172, 213, 242, 1)");
    } else if (value >= 10 && value <= 19) {
      setColor("rgba(127, 168, 201, 1)");
    } else if (value >= 20 && value <= 29) {
      setColor("rgba(82, 123, 160, 1)");
    } else if (value >= 30) {
      setColor("rgba(37, 78, 119, 1)");
    } else {
      setColor("rgba(237, 237, 237, 1)");
    }
  }, [value]);
  return (
    <div
      style={{
        background: `${color}`,
      }}
      className={styles.day}
    >
      <div className={styles.popover}>
        <div className={styles.content}>
          <p className={styles.phara}>{value} contributions</p>
          <p className={styles.phara}>{date}</p>
        </div>
      </div>
    </div>
  );
};

export { DayComponent };
