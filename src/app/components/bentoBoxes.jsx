//overall returns all the bento boxes
function BentoBoxes() {
  return (
    <>
      <Section
        split={false}
        leftContent={
          <>
            <div className="flex justify-end bg-wooden-table h-[24rem]">
              <div className="contentContainer ">
                <div className="paper"></div>
                <div className="phoneFrame"></div>
              </div>
            </div>
          </>
        }
        rightContent={
          <div className="flex justify-start">
            <div className="flex justify-start">
              <h1 className="font-bold text-white text-4xl">
                Now entering focus mode.
              </h1>
            </div>
          </div>
        }
      ></Section>
    </>
  );
}

function TextBox({ rounded = "none", gem, title, subtitle }) {
  return (
    <div className={`w-full bg-[#080808] rounded-${rounded} p-[3.125rem]`}>
      {gem ? <h1 className="text-5xl">{gem}</h1> : <></>}
      <h1 className="font-bold text-white text-4xl">{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}
function VisualsBox({ children, rounded = "none" }) {
  //visuals are the box which has the picture in it.
  return (
    <div className={`w-full bg-[#080808] rounded-${rounded}`}>{children}</div>
  );
}
//I want to use this like <Box rounded="3xl"></Box>
function Section({
  leftContent,
  rightContent,
  split = false,
  layout = "leftVisual",
}) {
  //i want split to be optional and default to false
  return (
    <>
      {split ? (
        <section className="flex gap-5">
          {
            (layout = "leftVisual" ? (
              <>
                <VisualsBox rounded="3xl">{leftContent}</VisualsBox>
                <TextBox rounded="3xl">{rightContent}</TextBox>
              </>
            ) : (
              <>
                <TextBox rounded="3xl">{rightContent}</TextBox>
                <VisualsBox rounded="3xl">{leftContent}</VisualsBox>
              </>
            ))
          }
        </section>
      ) : (
        (layout = "leftVisual" ? (
          <section className="flex">
            <VisualsBox rounded="l-3xl" gem="none"></VisualsBox>
            <TextBox rounded="r-3xl"></TextBox>
          </section>
        ) : (
          <section className="flex">
            <TextBox rounded="l-3xl">{rightContent}</TextBox>
            <VisualsBox rounded="r-3xl">{leftContent}</VisualsBox>
          </section>
        ))
      )}
    </>
  );
}
export default BentoBoxes;
