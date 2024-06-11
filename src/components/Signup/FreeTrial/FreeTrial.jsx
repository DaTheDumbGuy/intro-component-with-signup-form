import freeTrialStyles from "./freetrial.module.scss";
export default function FreeTrial() {
  return (
    <div className={freeTrialStyles.container}>
      <p>
        <a href="#">Try it free 7 days</a> then $20/mo.thereafter
      </p>
    </div>
  );
}
