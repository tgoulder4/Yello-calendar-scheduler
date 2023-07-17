function Button({
  buttonText,
  paddingY,
  paddingX,
  bg = "bg-white",
  bgHover = "hover:bg-slate-200",
  border = "border-[#3a3a3a] border-2",
  textColor = "text-black",
  textWeight = "font-bold",
}) {
  return (
    <div className="btnContainer flex items-center">
      <button
        className={`btn text-base font-bold flex-grow-0 ${textWeight} ${bg} ${border} ${bgHover} ${textColor} rounded-xl ${paddingY} ${paddingX}`}
      >
        {buttonText}
      </button>
    </div>
  );
}
export default Button;
