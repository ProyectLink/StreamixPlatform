import { InputEmailBanner, RippleButton } from "@components/atoms";
import { useForm } from "@hooks/useform";
import "./emailsubscription.scss";


export const EmailSubscriptionForm = () => {
  const { email, onInputChange } = useForm<{ email: string }>({ email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="formemail-subscription" onSubmit={handleSubmit}>
      <InputEmailBanner
        name="email"
        placeholder="Correo Electronico"
        value={email}
        onChange={onInputChange}
      />
      <RippleButton type="submit">Suscríbete</RippleButton>
    </form>
  );
};
