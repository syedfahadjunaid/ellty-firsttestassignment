import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";

export default function Checkboxes({
  disabled,
  color,
  checkboxBorder,
  checked,
  setChecked,
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
        {setChecked ? (
          <Checkbox
            disabled={disabled}
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        ) : (
          <Checkbox
            disabled={disabled}
            defaultChecked={checked}
            // onChange={(e) => setChecked && setChecked(e.target.checked)}
          />
        )}
      </ThemeProvider>
    </div>
  );
}
