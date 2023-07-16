//DOCS:
//create two boxes.
//split = true => The boxes will be separated (split)
//gem, title, subtitle => The respective elements of the text box
//visualLocation => The location of the visual box wrt the text box. E.g. =right => TextBox | VisualBox
//width = ["w-1/2","w-1/2"] => The boxes will fill an equal amount of space
//content => The content of the content box.

//Notes for next:
//I want the phone to stay in the middle.
//singleBoxes need to be fixed.
function BentoBoxes() {
  return (
    <>
      <Section
        split={false}
        orderSwap={true}
        title="Now entering focus mode."
        subtitle="Let's do more. Together."
        visualBackground="bg-wooden-table"
        widths={["w-2/3", "w-1/3"]}
        content={
          <>
            <div className="flex justify-end h-[21rem]">
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
        widths={["w-3/5", "w-2/5"]}
      ></Section>
      <Section
        split={false}
        oneBox={true}
        title="The new you."
        subtitle="Whether you’re studying French, practicing piano or simply having quiet time, Manjo can help you achieve peace of mind."
      ></Section>
    </>
  );
}

function TextBox({
  borderRadius = "rounded-3xl",
  gem,
  title,
  subtitle,
  width,
}) {
  return (
    <div
      className={`${width} bg-[#080808] flex flex-col gap-3.5 ${borderRadius} p-[2.375rem]`}
    >
      {gem ? <h1 className="text-5xl">{gem}</h1> : <></>}
      <h1 className="font-bold text-white text-3xl">{title}</h1>
      <h2 className="text-lg text-gray-400">{subtitle}</h2>
    </div>
  );
}
function VisualsBox({
  children,
  borderRadius = "rounded-3xl",
  visualBackground = "bg-[#080808]",
  width,
}) {
  //visuals are the box which has the picture in it.
  return (
    <div className={`w-full ${visualBackground} ${width} ${borderRadius}`}>
      {children}
    </div>
  );
}
function SingleBox({
  gem,
  title,
  subtitle,
  borderRadius = "rounded-3xl",
  content = "",
}) {
  return (
    <div
      className={`flex flex-col bg-[#080808] w-full p-[2.375rem] justify-center items-center ${borderRadius}`}
    >
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
  visualBackground,
  widths = ["w-1/2", "w-1/2"],
  borderRadius = ["rounded-l-3xl", "rounded-r-3xl"],
  orderSwap = false,
  oneBox = false,
}) {
  //so the correct props are generated BEFORE the elements are created with them
  if (orderSwap) {
    borderRadius.sort((a, b) => -1);
    widths.sort((a, b) => -1);
  }
  if (split) {
    borderRadius.fill("rounded-3xl");
    //twoBoxes[0].addProp("rounded-l-3xl")
  }
  let twoBoxes = [
    <TextBox
      title={title}
      subtitle={subtitle}
      gem={gem}
      borderRadius={borderRadius[0]}
      width={widths[0]}
    ></TextBox>,
    <VisualsBox
      visualBackground={visualBackground}
      borderRadius={borderRadius[1]}
      width={widths[1]}
    >
      {content}
    </VisualsBox>,
  ];
  let gap = "";
  //what about widths,border radii after sorting? how do I do that
  if (orderSwap) {
    twoBoxes.sort((a, b) => -1);
    //if the boxes have just been sorted WITH THE RADII THEN WHY ARE THEY THE WRONG WAY
  }
  if (split) {
    gap = "gap-8";
    //twoBoxes[0].addProp("rounded-l-3xl")
  }
  return (
    <>
      <section className={`flex ${gap}`}>
        {oneBox ? (
          <SingleBox gem={gem} title={title} subtitle={subtitle}></SingleBox>
        ) : (
          //there are multiple boxes here
          twoBoxes
        )}
      </section>
    </>
  );
}

export default BentoBoxes;
