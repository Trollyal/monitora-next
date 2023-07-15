import { Box, CircularProgress, ThemeProvider } from "@mui/material";
import { FC } from "react";

/** Fixed and centered oading spinner */
export const Loading: FC = () => {
  return (
    <CircularProgress
      sx={{
        position: 'fixed',
        top: '50%',
        left: 'calc(50% - 20px)',
      }}
    />
  )
}