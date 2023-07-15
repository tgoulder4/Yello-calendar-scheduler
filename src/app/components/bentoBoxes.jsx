//overall returns all the bento boxes
function BentoBoxes() {
  return (
    <>
      <Section
        split={true}
        title="Now entering focus mode."
        subtitle="Let's do more. Together."
        visualLocation="left"
        visualBackground="wooden-table"
        width={["w-2/3", "w-1/3"]}
        content={
          <>
            <div className="flex justify-end h-[24rem]">
              <img
                src="/assets/Paper.png"
                className="object-fit"
                draggable="false"
                alt=""
              />
              <img
                src="/assets/Phone.svg"
                className="object-fit"
                draggable="false"
                alt=""
              />
            </div>
          </>
        }
      ></Section>
      {/* <Section
        split={true}
        title="Daily Focus improves wellbeing by 70%."
        subtitle="Manjo helps you spend at least 2 hours a day on task without distractions."
        layout="rightVisual"
      ></Section> */}
    </>
  );
}

function TextBox({ rounded = "rounded-none", gem, title, subtitle, width }) {
  return (
    <div
      className={`w-full bg-[#080808] flex flex-col gap-3.5 ${width} ${rounded} p-[3.125rem]`}
    >
      {gem ? <h1 className="text-5xl">{gem}</h1> : <></>}
      <h1 className="font-bold text-white text-4xl">{title}</h1>
      <h2 className="text-lg text-gray-400">{subtitle}</h2>
    </div>
  );
}
function VisualsBox({
  children,
  rounded = "none",
  visualBackground = "[#080808]",
  width,
}) {
  //visuals are the box which has the picture in it.
  return (
    <div className={`w-full bg-${visualBackground} ${width} ${rounded}`}>
      {children}
    </div>
  );
}
function Section({
  title,
  subtitle,
  gem,
  split = false,
  content,
  visualLocation = "right",
  visualBackground,
  width = ["w-1/2", "w-1/2"],
}) {
  //i want split to be optional and default to false
  return (
    <>
      {/* visual left? */}
      {/* code: children[0].addClass(p-0) else (p-[50px]) */}
      {split ? (
        <section className="flex gap-5">
          {
            (visualLocation = "left" ? (
              <>
                <VisualsBox
                  width={`${width[0]}`}
                  visualBackground={visualBackground}
                  rounded="rounded-3xl"
                >
                  {content}
                </VisualsBox>
                <TextBox
                  title={title}
                  subtitle={subtitle}
                  gem={gem}
                  rounded="rounded-3xl"
                  width={`${width[1]}`}
                ></TextBox>
              </>
            ) : (
              <>
                <TextBox
                  title={title}
                  subtitle={subtitle}
                  gem={gem}
                  rounded="rounded-3xl"
                  width={`${width[0]}`}
                ></TextBox>
                <VisualsBox
                  visualBackground={visualBackground}
                  rounded="rounded-3xl"
                  width={`${width[1]}`}
                >
                  {content}
                </VisualsBox>
              </>
            ))
          }
        </section>
      ) : (
        (visualLocation = "left" ? (
          <section className="flex">
            <VisualsBox
              visualBackground={visualBackground}
              rounded="rounded-l-3xl"
              gem="none"
              width={`${width[0]}`}
            >
              {content}
            </VisualsBox>
            <TextBox
              title={title}
              subtitle={subtitle}
              gem={gem}
              rounded="rounded-r-3xl"
              width={`${width[1]}`}
            ></TextBox>
          </section>
        ) : (
          <section className="flex">
            <TextBox
              title={title}
              subtitle={subtitle}
              gem={gem}
              rounded="rounded-l-3xl"
              width={`${width[0]}`}
            ></TextBox>
            <VisualsBox
              visualBackground={visualBackground}
              rounded="rounded-r-3xl"
              width={`${width[1]}`}
            >
              {content}
            </VisualsBox>
          </section>
        ))
      )}
    </>
  );
}
export default BentoBoxes;
