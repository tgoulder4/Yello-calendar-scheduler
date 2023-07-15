//overall returns all the bento boxes
function BentoBoxes() {
  return (
    <TwoBoxes
      split="false"
      leftContent={
        <>
          <div className="flex justify-end">
            <div className="contentContainer bg-amber-800">
              <div className="paper"></div>
              <div className="phoneFrame"></div>
            </div>
          </div>
        </>
      }
      rightContent={
        <div className="flex justify-start">
          <div className="flex justify-start">
            <title className="font-bold text-white text-4xl">
              Now entering focus mode.
            </title>
          </div>
        </div>
      }
    ></TwoBoxes>
  );
}

function FullWidthBox({ children }) {
  return <section className="w-100 bg-[#080808]">{children}</section>;
}
function TwoBoxes({ leftContent, rightContent, split = false }) {
  //i want split to be optional and default to false
  return (
    <>
      {split ? (
        <section>
          <div className="w-100 rounded-3xl bg-[#080808]">{leftContent}</div>
          <div className="w-100 rounded-3xl bg-[#080808]">{rightContent}</div>
        </section>
      ) : (
        <section>
          <div className="w-100 rounded-l-3xl bg-[#080808]">{leftContent}</div>
          <div className="w-100 rounded-r-3xl bg-[#080808]">{rightContent}</div>
        </section>
      )}
    </>
  );
}
export default BentoBoxes;
