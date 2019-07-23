// const React = require("react");
// const Button = require("../Button").default;
// const renderer = require("react-test-renderer");

import Button from "../Button";
import renderer from "react-test-renderer";
import React from "react";


test("renders correctly", () => {
  const tree = renderer.create(<Button status={0} />).toJSON();
  expect(tree).toMatchSnapshot();
});
