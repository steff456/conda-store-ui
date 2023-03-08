import { addDecorator } from "@storybook/react"
import { themeDecorator } from "../src/theme"

export const parameters = {
  options: {
    storySort: {
      order: ['Welcome', 'docs', ['Getting Started', 'Installation', 'Configuration', 'Extensions', ['JupyterLab',]], ], 
    },
  },
}

addDecorator(themeDecorator);
