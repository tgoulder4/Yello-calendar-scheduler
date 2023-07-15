//DOCS:
//create two boxes.
//split = true => The boxes will be separated (split)
//gem, title, subtitle => The respective elements of the text box
//visualLocation => The location of the visual box wrt the text box. E.g. =right => TextBox | VisualBox
//width = ["w-1/2","w-1/2"] => The boxes will fill an equal amount of space
//content => The content of the content box.
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
                className="object-fit m-[25px]"
                draggable="false"
                alt=""
              />
            </div>
          </>
        }
      ></Section>
      <Section
        split={true}
        title="Daily Focus improves wellbeing by 70%."
        subtitle="Manjo helps you spend at least 2 hours a day on task without distractions."
        visualLocation="right"
      ></Section>
      <Section split={false} mode="singleBox" title="singlebox test"></Section>
    </>
  );
}

function TextBox({ rounded = "rounded-3xl", gem, title, subtitle, width }) {
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
  rounded = "rounded-3xl",
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
function SingleBox({
  gem,
  title,
  subtitle,
  rounded = "rounded-3xl",
  content = "",
}) {
  return (
    <div className={`flex justify-center items-center ${rounded}`}>
      {/* content or this below */}
      {content}
      {gem ? <h1 className="text-5xl">{gem}</h1> : <></>}
      <h1 className="font-bold text-white text-4xl">{title}</h1>
      <h2 className="text-lg text-gray-400">{subtitle}</h2>
    </div>
  );
}

function Section({
  title,
  subtitle,
  gem,
  split = false,
  content = "",
  visualLocation = "right",
  visualBackground,
  width = ["w-1/2", "w-1/2"],
  mode = "twoBoxes",
}) {
  //i want split to be optional and default to false
  return (
    <>
      {/* an absolute mess. needs refactoring:
      content,title,subtitle,gem is by default "".
        function Section({

        }){
            return (
                one box?
	                <SingleBox title={title}... >{Content}</SingleBox>
                :
                {visualLocation == left?
	                twoBoxes.swap(a,b=>-1)
	                widths.swap(as above)
                    split? borderRadius=3xl : []
                }
                <section>{twoBoxes}</section>
const twoBoxes = [
<TextBox title={title} subtitle={subtitle}...> </TextBox>
<VisualBox>{Content}</VisualBox>]
        }

      */}
      {mode == "twoBoxes" ? (
        split ? (
          <section className="flex gap-5">
            {visualLocation == "left" ? (
              <>
                <VisualsBox
                  width={`${width[0]}`}
                  visualBackground={visualBackground}
                >
                  {content}
                </VisualsBox>
                <TextBox
                  title={title}
                  subtitle={subtitle}
                  gem={gem}
                  width={`${width[1]}`}
                ></TextBox>
              </>
            ) : (
              <>
                <TextBox
                  title={title}
                  subtitle={subtitle}
                  gem={gem}
                  width={`${width[0]}`}
                ></TextBox>
                <VisualsBox
                  visualBackground={visualBackground}
                  width={`${width[1]}`}
                >
                  {content}
                </VisualsBox>
              </>
            )}
          </section>
        ) : visualLocation == "left" ? (
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
        )
      ) : (
        <section>
          <SingleBox gem={gem} title={title} subtitle={subtitle}></SingleBox>
        </section>
      )}
    </>
  );
}

export default BentoBoxes;
