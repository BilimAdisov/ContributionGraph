import { DayComponent } from "./day";
import styles from "./style.module.css";

const ContributionGraph = ({ data }: any) => {
  return (
    <div className={styles.container_data}>
      {data &&
        Object.entries(data).map(([key, value]: any) => (
          <DayComponent key={key} date={key} value={value} />
        ))}
    </div>
  );
};

export { ContributionGraph };
