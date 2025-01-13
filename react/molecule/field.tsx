import styles from './field.module.scss';

interface Props {
  label?: string;
  labelClass?: string;
  required?: boolean;
  helper?: string;
  helperClass?: string;
  children?: React.ReactNode;
}

const Field = ({
  label,
  labelClass,
  required,
  helper,
  helperClass,
  children,
}: Props) => {
  return (
    <div className={`${styles.style}`}>
      <label className={labelClass}>
        {label}

        {required && <span className="required">*</span>}
      </label>
      <div className="child">{children}</div>
      <div className={`helper ${helperClass}`}>{helper}</div>
    </div>
  );
};

export default Field;
