function Button({
  buttonText,
  paddingY,
  paddingX,
  bg = "bg-white",
  bgHover = "hover:bg-slate-200",
  stroke = "stroke-white",
  textColor = "text-black",
  textWeight = "font-bold",
}) {
  return (
    <div className="btnContainer flex items-center">
      <button
        className={`btn text-base font-bold flex-grow-0 ${textWeight} ${bg} ${stroke}${bgHover} ${textColor} rounded-xl ${paddingY} ${paddingX}`}
      >
        {buttonText}
      </button>
    </div>
  );
}
export default Button;
