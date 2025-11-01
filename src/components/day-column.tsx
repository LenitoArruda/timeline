import { Box } from "@mui/material";

interface DayColumnProps {
    dayIndex: number;
    minDate: Date;
}

export function DayColumn(props: DayColumnProps) {

    const { dayIndex, minDate } = props;

    const currentDate = new Date(minDate);
    currentDate.setDate(minDate.getDate() + (dayIndex - 1));
    const formattedDate = currentDate.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    return (
        <Box height="100%" width="100px">
            <Box bgcolor="#d3d3d3" fontSize={12} p={1}>
                {formattedDate}
            </Box>
        </Box>
    )
}