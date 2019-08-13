import { configure, addDecorator } from "@storybook/react";
import { withOptions } from "@storybook/addon-options";
import packageJson from "../package.json";

addDecorator(
  withOptions({
    name: "React Css Spinners",
    url: packageJson.repository.url,
    showAddonPanel: false
  })
);

function loadStories() {
  require("../stories/index.js");
}

configure(loadStories, module);
