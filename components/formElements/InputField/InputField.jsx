const InputField = ({
  wrapperClassName,
  label,
  labelClassName,
  inputClassName,
  type = "text",
  name = "",
  value,
  onChangeHandler = () => {},
  placeholder = "",
  errMsg,
}) => {
  return (
    <div className={`${wrapperClassName}`}>
      <label className={`${labelClassName} font-reddit-sans text-14 font-medium`}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        className={`${inputClassName} placeholder:text-gray-8080 border-b border-b-gray-8080 font-medium text-12 font-reddit-sans p-2`}
      />
      {errMsg && <p className="text-12 text-red-400">{errMsg}</p>}
    </div>
  );
};

export default InputField;
