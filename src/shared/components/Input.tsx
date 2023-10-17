import { Controller, Control } from 'react-hook-form';
import { Rules } from "../types";

interface InputProps {
  className: string;
  classNameContainer: string;
  control: Control<any>,
  label: string;
  name: string;
  type: string;
  rules?: Rules
}

export const Input: React.FC<InputProps> = ({
  className,
  classNameContainer,
  control,
  label,
  name,
  rules,
  type,
}) => {
  return (
    <div className={classNameContainer}>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <input
              type={type || "text"}
              className={className || "form-control"}
              id={field.name}
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
            />
            {fieldState.error &&
              <small id="emailHelp" className="form-text text-danger">
                {fieldState.error.message}
              </small>
            }

          </>
        )}
      />

    </div>
  );
};
