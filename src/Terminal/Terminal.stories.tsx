import * as React from "react";

import { text } from "@storybook/addon-knobs/react";
import { storiesOf } from "@storybook/react";

import { wInfo } from "../utils";
import { Terminal } from "./Terminal";

(storiesOf("Components/Terminal", module) as any).addWithJSX(
  "default",
  wInfo(`

  ### Notes

  This is terminal

  ### Usage
  ~~~js
  <Terminal
    title={'ZSH'}
    promptName={'thanatchakromsang@gmail.com'}
    profileDetails={[{ key: 'hello', value: '123'}]}
  />
  ~~~`)(() => {
    const defaultValue = [
      { key: "Name", value: "Thanatchaya Kromsaeng" },
      { key: "Age", value: "21 years old" },
      { key: "Education", value: "KMITL Engineering class of 2015-2019" },
      { key: "Email", value: "thanatchakromsang@gmail.com" }
    ];
    return (
      <Terminal
        title={text("title", "ZSH")}
        promptName={text("promptName", "thanatchaya@gmail.com:~$ ")}
        profileDetails={defaultValue}
      />
    );
  })
);