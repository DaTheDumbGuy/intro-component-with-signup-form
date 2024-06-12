import inputStyles from "./input.module.scss";
import errImg from "../../../../../images/icon-error.svg";

export default function Input(props) {
  console.log(props.error);
  return (
    <div className={inputStyles.input_group}>
      <div
        className={`${inputStyles.input_container} ${
          props.error ? inputStyles.errorInput : ""
        }`}
      >
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
        <span className={inputStyles.errorImg}>
          <img src={props.error ? errImg : ""} alt="" />
        </span>
      </div>
      <span className={inputStyles.errorMsg}>{props.error}</span>
    </div>
  );
}
