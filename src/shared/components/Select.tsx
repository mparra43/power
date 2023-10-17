import { Controller, Control } from "react-hook-form";
import { Option, Rules } from "../types";

interface SelectProps {
  className: string;
  classNameContainer: string;
  control: Control<any>;
  label: string;
  name: string;
  rules: Rules;
  options: Option[];
}

export const Select: React.FC<SelectProps> = ({
  className,
  classNameContainer,
  control,
  label,
  name,
  rules,
  options,
}) => {
  return (
    <div className={classNameContainer}>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState },) => (
          <>
            <select
              className={className || "form-control"}
              id={field.name}
              value={field.value}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => field.onChange(e.target.value)}
            >
              {options.map(({ label, value }, index) => (
                <option key={index} value={value}>{label}</option>
              ))}
            </select>
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
