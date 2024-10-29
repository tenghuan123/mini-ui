import React from "react";
import type { Preview } from "@storybook/react";
import { Toaster } from "../src/toaster";
import "../src/global.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  }
};

export const decorators = [
    (Story) => (
      <React.StrictMode>
          <Story />
          <Toaster />
      </React.StrictMode>
    ),
  ]

export default preview;
