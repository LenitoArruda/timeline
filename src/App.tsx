import { Box } from "@mui/material";
import { assignLanes } from "./assignLanes";
import timelineItems from "./timelineItems";
import { Header } from "./components/header";
import { Timeline } from "./components/timeline";

export function App() {

    const timelineTeste = assignLanes(timelineItems);

    return (
        <Box height="100vh" width="100vw" bgcolor="#F4F4F4" display="flex" flexDirection="column">
            <Header />
            <Timeline />
        </Box>
    );
}
