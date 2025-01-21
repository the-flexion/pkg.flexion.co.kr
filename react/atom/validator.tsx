import React, { useState, useEffect, useCallback } from 'react';
import { ReactNode } from 'react';
import { z } from 'zod';
import styles from './validator.module.scss';

interface ValidatorWrapperProps {
  children: ReactNode;
  validator: z.ZodType<unknown>;
  value: string;
  setClassName: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
}

const Validator: React.FC<ValidatorWrapperProps> = ({
  children,
  validator,
  value,
  setClassName,
  className,
}) => {
  const [message, setMessage] = useState('');

  const validateHandler = useCallback(() => {
    setMessage('');
    if (validator && value.length > 0) {
      try {
        validator.parse(value);
        setClassName('success');
      } catch (e) {
        if (e instanceof z.ZodError) {
          setMessage(e.errors[0].message);
          setClassName('danger');
        }
      }
    }
  }, [validator, value, setClassName]);

  useEffect(() => {
    validateHandler();
  }, [validateHandler]);

  return (
    <div className={`${styles.style} ${className || ''}`}>
      {children}
      {validator && message !== '' && (
        <div className={styles.validator}>{message}</div>
      )}
    </div>
  );
};

export default Validator;
