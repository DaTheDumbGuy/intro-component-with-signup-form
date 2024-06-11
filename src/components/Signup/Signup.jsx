import Header from "./Header/Header";
import FreeTrial from "./FreeTrial/FreeTrial";
import Form from "./Form/Form";

export default function Signup() {
  return (
    <article className="sign_up_component">
      <Header />
      <div className="sign_up_component_body">
        <FreeTrial />
        <Form />
      </div>
    </article>
  );
}
