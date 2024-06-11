import inputStyles from "./input.module.scss";

export default function Input(props) {
  return (
    <div className="input-group">
      <div className="input">
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
        <span className={inputStyles.error}>{props.error}</span>
      </div>
      <span>err</span>
    </div>
  );
}
