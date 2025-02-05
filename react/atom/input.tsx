import { useState, useEffect, useCallback } from 'react';
import { z } from 'zod';
import styles from './input.module.scss';

interface InputWrapperProps extends React.ComponentProps<'input'> {
  value?: string | number;
  className?: string;
  validator?: z.ZodType<unknown>;
  withIcon?: string;
  withRightIcon?: string;
}

const Input: React.FC<InputWrapperProps> = ({
  validator,
  value,
  className,
  withIcon,
  withRightIcon,
  ...rest
}) => {
  const [message, setMessage] = useState('');
  const [statusClass, setStatusClass] = useState('');

  const validateHandler = useCallback(() => {
    setMessage('');
    setStatusClass('');
    if (validator && value) {
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
        className={`${withIcon ? 'with-icon' : ''} ${withRightIcon ? 'with-right-icon' : ''}`}
      >
        {withIcon && <i className={withIcon} />}
        <input
          {...rest}
          value={value ?? ''}
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
