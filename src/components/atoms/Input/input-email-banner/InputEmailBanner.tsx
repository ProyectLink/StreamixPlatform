
import "./inputbanner.scss"; 
interface InputEmailBannerProps {
  placeholder: string;
  value?: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

export const InputEmailBanner= ({  placeholder, value, onChange, name }: InputEmailBannerProps) => {
  return (
    <input
      className="input-banner"
      type="email"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};
