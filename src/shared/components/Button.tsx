

interface  ButtonProps {
  className: string;
  label: string;
  onClick?: () => void;
  type?: 'reset' | 'submit'
}

export const Button: React.FC<ButtonProps>  = ({className, label, onClick, type}) => {
  return (
    <button className={`${className}`} type ={type||'button'}  onClick={onClick}>{label}</button>
  );
};
