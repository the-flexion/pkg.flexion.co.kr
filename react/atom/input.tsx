import { useState, useEffect, useCallback, useRef } from 'react';
import { z } from 'zod';
import styles from './input.module.scss';

export type InputWrapperProps = React.ComponentProps<'input'> & {
  value?: string | number;
  errMessage?: string;
  className?: string;
  validator?: z.ZodType<unknown>;
  withIcon?: string;
  withRightIcon?: string;
  unit?: string;
};

const Input: React.FC<InputWrapperProps> = ({
  validator,
  errMessage,
  value,
  className,
  withIcon,
  withRightIcon,
  unit,
  ...rest
}) => {
  const [message, setMessage] = useState('');
  const [statusClass, setStatusClass] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const pickerHandler = () => {
    inputRef.current?.showPicker?.();
  };

  const validateHandler = useCallback(() => {
    setMessage('');
    setStatusClass('');
    if (validator && value) {
      try {
        validator.parse(value);
        setStatusClass('');
      } catch (e) {
        if (e instanceof z.ZodError) {
          setMessage(e.errors[0].message);
          setStatusClass('danger');
        }
      }
    }
  }, [validator, value]);

  useEffect(() => {
    if (errMessage !== undefined) {
      setMessage(errMessage);
      setStatusClass('danger');
    }
  }, [errMessage]);

  useEffect(() => {
    validateHandler();
  }, [validateHandler, value]);

  return (
    <div className={`${styles.style} ${className || ''}`}>
      <div
        className={`${className || ''} ${withIcon ? 'with-icon' : ''} ${withRightIcon ? 'with-right-icon' : ''}`}
      >
        {withIcon && <i className={withIcon} onClick={pickerHandler} />}
        <input
          {...rest}
          value={value ?? ''}
          className={`${statusClass} ${className || ''}`}
          ref={inputRef}
        />
        <div className="etc">
          {unit && <span className="unit">{unit}</span>}
          {withRightIcon && (
            <i className={withRightIcon} onClick={pickerHandler} />
          )}
        </div>
      </div>
      {validator && message !== '' && (
        <div className="validator">{message}</div>
      )}
    </div>
  );
};

export default Input;
