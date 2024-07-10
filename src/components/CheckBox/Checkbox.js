import React from "react";
import "./Checkbox.css";

const Checkbox = ({ disabled, color, checkboxBorder, checked, setChecked }) => {
  return (
    <>
      {setChecked ? (
        <input
          type="checkbox"
          className={`w-[25px] h-[25px]`}
          checked={checked}
          disabled={disabled}
          style={{
            accentColor: color,
          }}
          onChange={(e) => setChecked(e.target.checked)}
        />
      ) : (
        <input
          type="checkbox"
          className={`w-[25px] h-[25px] rounded-[6px]`}
          // checked={checked}
          defaultChecked={checked}
          disabled={disabled}
          style={{
            accentColor: color,
          }}
        />
      )}
    </>
  );
};

export default Checkbox;

// import * as React from "react";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Checkbox from "@mui/material/Checkbox";

// export default function Checkboxes({
//   disabled,
//   color,
//   checkboxBorder,
//   checked,
//   setChecked,
// }) {
//   const theme = createTheme({
//     components: {
//       MuiCheckbox: {
//         styleOverrides: {
//           root: {
//             color: checkboxBorder,
//             "&.Mui-checked": {
//               color: color,
//             },
//           },
//         },
//       },
//     },
//   });
//   return (
//     <div>
//       <ThemeProvider theme={theme}>
//         {setChecked ? (
//           <Checkbox
//             disabled={disabled}
//             checked={checked}
//             onChange={(e) => setChecked(e.target.checked)}
//           />
//         ) : (
//           <Checkbox
//             disabled={disabled}
//             defaultChecked={checked}
//             // onChange={(e) => setChecked && setChecked(e.target.checked)}
//           />
//         )}
//       </ThemeProvider>
//     </div>
//   );
// }
