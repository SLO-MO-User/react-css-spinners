import React from "react";
import renderer from "react-test-renderer";
import { Facebook } from ".";

it("renders correctly", () => {
  const tree = renderer.create(<Facebook />).toJSON();
  expect(tree).toMatchSnapshot();
});
