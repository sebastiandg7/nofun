import styles from './feature-spy.module.css';

/* eslint-disable-next-line */
export interface FeatureSpyProps {}

export function FeatureSpy(props: FeatureSpyProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatureSpy!</h1>
    </div>
  );
}

export default FeatureSpy;
