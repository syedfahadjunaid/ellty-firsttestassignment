import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";

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
            color: checkboxBorder,
            "&.Mui-checked": {
              color: color,
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
