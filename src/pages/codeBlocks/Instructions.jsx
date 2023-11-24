import React from "react";
import { CopyBlock, tomorrowNight } from "react-code-blocks/dist";

const Instructions = () => {
  const text = `import { CopyBlock } from "react-code-blocks";\n\nfunction MyCodeComponent(props) {
  return (
    <CopyBlock
      text={props.code}
      language={props.language}
      showLineNumbers={props.showLineNumbers}
      wrapLongLines
      theme={tomorrowNight}
    />
  );
}`;

  return (
    <div>
      <CopyBlock
        language={"javascript"}
        showLineNumbers={true}
        text={text}
        wrapLongLines
        theme={tomorrowNight}
      />
    </div>
  );
};

export default Instructions;
