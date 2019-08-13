import React from "react";
import { storiesOf } from "@storybook/react";
import {
  Ellipsis,
  Ring,
  DualRing,
  Facebook,
  Grid,
  Hourglass,
  Circle,
  Heart,
  Roller,
  Spinner,
  Ripple
} from "../src";

storiesOf("Spinners", module)
  .add("Ellipsis", () => <Ellipsis />)
  .add("Ring", () => <Ring />)
  .add("DualRing", () => <DualRing />)
  .add("Facebook", () => <Facebook />)
  .add("Grid", () => <Grid />)
  .add("Hourglass", () => <Hourglass />)
  .add("Circle", () => <Circle />)
  .add("Heart", () => <Heart />)
  .add("Ripple", () => <Ripple />)
  .add("Spinner", () => <Spinner />);
