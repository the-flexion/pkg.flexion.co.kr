import styles from './field.module.scss';

interface Props {
  label?: string;
  helper?: string;
  helperClass?: string;
  children?: React.ReactNode;
}

const Field = ({ label, helper, helperClass, children }: Props) => {
  return (
    <div className={`${styles.style}`}>
      <label className={styles.label}>{label}</label>
      {children}
      <div className={`helper ${helperClass}`}>{helper}</div>
    </div>
  );
};

export default Field;
