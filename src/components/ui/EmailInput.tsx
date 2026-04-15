import { InputHTMLAttributes, forwardRef } from 'react';

export interface EmailInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(
  ({ className = '', label, id, ...props }, ref) => {
    const inputId = id || 'email-input';
    
    return (
      <div className={`relative w-full ${className}`}>
        {label && (
          <label htmlFor={inputId} className="sr-only">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          type="email"
          className="w-full px-4 py-3.5 bg-gray-900/80 border border-gray-600 text-white rounded focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors duration-200 placeholder-gray-400"
          placeholder={props.placeholder || 'Email address'}
          {...props}
        />
      </div>
    );
  }
);

EmailInput.displayName = 'EmailInput';

export default EmailInput;
