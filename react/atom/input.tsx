import { useState, useEffect, useCallback } from 'react';
import { z } from 'zod';
import styles from './input.module.scss';

interface InputWrapperProps extends React.ComponentProps<'input'> {
  value: string;
  className?: string;
  validator?: z.ZodType<unknown>;
  withLeftIcon?: string;
  withRightIcon?: string;
}

const Input: React.FC<InputWrapperProps> = ({
  validator,
  value,
  className,
  withLeftIcon,
  withRightIcon,
  ...rest
}) => {
  const [message, setMessage] = useState('');
  const [statusClass, setStatusClass] = useState('');

  const validateHandler = useCallback(() => {
    setMessage('');
    setStatusClass('');
    if (validator && value.length > 0) {
      try {
        validator.parse(value);
        setStatusClass('success');
      } catch (e) {
        if (e instanceof z.ZodError) {
          setMessage(e.errors[0].message);
          setStatusClass('danger');
        }
      }
    }
  }, [validator, value]);

  useEffect(() => {
    validateHandler();
  }, [validateHandler, value]);

  return (
    <div className={`${styles.style} ${className || ''}`}>
      <div
        className={`${withLeftIcon && 'with-icon'} ${withRightIcon && 'with-right-icon'}`}
      >
        {withLeftIcon && <i className={withLeftIcon} />}
        <input
          {...rest}
          value={value}
          className={`${statusClass} ${className || ''}`}
        />
        {withRightIcon && <i className={withRightIcon} />}
      </div>
      {validator && message !== '' && (
        <div className={styles.validator}>{message}</div>
      )}
    </div>
  );
};

export default Input;
