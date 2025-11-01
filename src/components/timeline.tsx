import { Box, Divider, Typography } from "@mui/material";
import { useMemo } from "react";
import { assignLanes } from "../assignLanes";
import timelineItems from "../timelineItems";
import { DayColumn } from "./day-column";
import { ItemProps } from "../types/items";
import { TimelineLane } from "./timeline-lane";

export function Timeline() {

    const itemsWithLanes: ItemProps[][] = useMemo(() => assignLanes(timelineItems), []);
    const minDate = new Date(Math.min(...timelineItems.map(i => new Date(i.start).getTime())));
    const maxDate = new Date(Math.max(...timelineItems.map(i => new Date(i.end).getTime())));
    const diffInMs = maxDate.getTime() - minDate.getTime();
    const totalDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));
    const arrayDays = Array.from({ length: totalDays + 1 }).map((_, i) => i);

    return (
        <Box p={2} display="flex" flexDirection="column" flex={1}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="start"
                bgcolor="#fff"
                borderRadius="6px"
                boxShadow="0 2px 6px rgba(0, 0, 0, 0.08)"
                p={1}
                height="100%"
                gap={2}
            >
                <Typography fontSize={25} fontWeight={600} color="#3070B6">
                    Items Timeline
                </Typography>

                <Box display="flex" width="100%" overflow="auto" height="50px" flex={1} position="relative">
                    {
                        arrayDays.map((index: number) => {
                            return (
                                <Box key={index} flex={1} display="flex">
                                    {
                                        index === 0 &&
                                        <Divider orientation="vertical" flexItem />
                                    }
                                    <DayColumn dayIndex={index + 2} minDate={minDate} />
                                    <Divider orientation="vertical" flexItem />
                                </Box>
                            )
                        })
                    }
                    <Box position="absolute" top={40} left={1} flex={1} width="100%" display="flex" flexDirection="column" gap={2}>
                        {itemsWithLanes.map((items: ItemProps[], index: number) => (
                            <TimelineLane items={items} key={index} minDate={minDate} />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}