import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Checkboxes({
  disabled,
  color,
  checkboxBorder,
  checked,
}) {
  const theme = createTheme({
    components: {
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: checkboxBorder, // Default unchecked color
            "&.Mui-checked": {
              color: color, // Check color when checked
            },
          },
        },
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Checkbox disabled={disabled} defaultChecked={checked} />
      </ThemeProvider>
    </div>
  );
}
