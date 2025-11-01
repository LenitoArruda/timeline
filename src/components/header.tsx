import { Box, Typography } from "@mui/material";

export function Header() {
    const logoUrl = new URL('../assets/logo.png', import.meta.url).href;
    return (
        <Box height={50} boxShadow="0 2px 6px rgba(0, 0, 0, 0.08)" display="flex" alignItems="center" px={4} bgcolor="#fff">
            <img src={logoUrl} alt="Logo" style={{ height: 30 }} />
        </Box>
    )
}