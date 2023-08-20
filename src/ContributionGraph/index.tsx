import { FC } from "react";
import { DayComponent } from "./day";
import styles from "./style.module.css";

interface ContributionData {
  [date: string]: number;
}

const ContributionGraph: FC<{ data: ContributionData }> = ({ data }) => {
  return (
    <div className={styles.container_data}>
      {data &&
        Object.entries(data).map(([key, value]) => (
          <DayComponent key={key} date={key} value={value} />
        ))}
    </div>
  );
};

export { ContributionGraph };
