'use client';
import { useState } from 'react';
import { z } from 'zod';
import styles from './input.module.scss';

interface InputWrapperProps extends React.ComponentProps<'input'> {
  value: string;
  className?: string;
  validator?: z.ZodType<unknown>;
}

const Input: React.FC<InputWrapperProps> = ({
  validator,
  value,
  className,
  ...rest
}) => {
  const [message, setMessage] = useState('');
  const [statusClass, setStatusClass] = useState('');

  const validateHandler = () => {
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
  };

  return (
    <div className={`${styles.style} ${className}`}>
      <input
        {...rest}
        className={`${statusClass} ${className}`}
        onKeyUp={validateHandler}
      />
      {validator && message !== '' && (
        <div className={styles.validator}>{message}</div>
      )}
    </div>
  );
};

export default Input;
