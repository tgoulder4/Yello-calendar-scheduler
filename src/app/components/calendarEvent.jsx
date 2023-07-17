function CalendarEvent({ title, focus = false }) {
  return (
    <>
      {focus ? (
        <div className="flex h-[800px] py-[14px] px-[12px] flex-col justify-start rounded-l-xl bg-[#CC9C21] stroke-[#836417] stroke-2">
          <p className="text-base font-bold  text-[#4E3C0E]">Focus</p>
          <span class=" max-w-fit tracking-wider font-bold text-xs mr-2 px-2 py-1 rounded bg-[color:var(--primaryLight)] text-[#E2E2E2]">
            STUDY
          </span>
        </div>
      ) : (
        <div className="flex h-full  py-[14px] px-[12px] flex-col justify-start rounded-l-xl bg-[#151515] stroke-[#424242] stroke-2">
          <p className="text-base text-[#DEDEDE]">{title}</p>
        </div>
      )}
    </>
  );
}

export default CalendarEvent;
