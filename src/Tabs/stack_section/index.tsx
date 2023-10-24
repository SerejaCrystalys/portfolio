import { StackContent, StackItem, StackTitle } from "./__styled";

export const StackSection = () => {
  return (
    <>
      {/* {
        <StackTitle language={language}>
          {localization!.stack!.title}
        </StackTitle>
      }
      <StackContent language={language}>
        {localization!.stack!.content.map((item: string, index: number) => {
          return (
            <StackItem key={index}>
              <img
                src={`/icons/arrow.svg`}
                alt={"arrow"}
                className="stack_arrow"
              />
              <img
                src={`/imgs/stack/${item}.svg`}
                alt=""
                width={77}
                height={77}
              />
              {item}
            </StackItem>
          );
        })}
      </StackContent> */}
    </>
  );
};
