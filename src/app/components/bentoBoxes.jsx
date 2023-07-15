//overall returns all the bento boxes
function BentoBoxes() {
  return (
    <>
      <Section
        split={true}
        title="Now entering focus mode."
        subtitle="Let's do more. Together."
        layout="leftVisual"
        visualBackground="wooden-table"
        width={["w-2/3", "w-1/3"]}
        content={
          <>
            <div className="flex justify-end h-[24rem]">
              <div className="paper"></div>
              <div className="phoneFrame"></div>
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

function TextBox({ rounded = "rounded-none", gem, title, subtitle }) {
  return (
    <div
      className={`w-full bg-[#080808] flex flex-col gap-3.5 ${rounded} p-[3.125rem]`}
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
}) {
  //visuals are the box which has the picture in it.
  return (
    <div className={`w-full bg-${visualBackground} ${rounded}`}>{children}</div>
  );
}
function Section({
  title,
  subtitle,
  gem,
  split = false,
  content,
  layout = "rightVisual",
  visualBackground,
  width = ["w-1/2", "w-1/2"],
}) {
  //i want split to be optional and default to false
  return (
    <>
      {split ? (
        <section className="flex gap-5">
          {
            (layout = "leftVisual" ? (
              <>
                <VisualsBox
                  className={`${width[0]}`}
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
                  className={`${width[1]}`}
                ></TextBox>
              </>
            ) : (
              <>
                <TextBox
                  title={title}
                  subtitle={subtitle}
                  gem={gem}
                  rounded="rounded-3xl"
                ></TextBox>
                <VisualsBox
                  visualBackground={visualBackground}
                  rounded="rounded-3xl"
                >
                  {content}
                </VisualsBox>
              </>
            ))
          }
        </section>
      ) : (
        (layout = "leftVisual" ? (
          <section className="flex">
            <VisualsBox
              visualBackground={visualBackground}
              rounded="rounded-l-3xl"
              gem="none"
            >
              {content}
            </VisualsBox>
            <TextBox
              title={title}
              subtitle={subtitle}
              gem={gem}
              rounded="rounded-r-3xl"
            ></TextBox>
          </section>
        ) : (
          <section className="flex">
            <TextBox
              title={title}
              subtitle={subtitle}
              gem={gem}
              rounded="rounded-l-3xl"
            ></TextBox>
            <VisualsBox
              visualBackground={visualBackground}
              rounded="rounded-r-3xl"
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
