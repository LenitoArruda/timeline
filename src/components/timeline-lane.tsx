import { Box, Tooltip, Typography } from "@mui/material";
import { ItemProps } from "../types/items";
import { itemColors } from "../constants";

interface TimelineLaneProps {
    items: ItemProps[];
    minDate: Date;
}

export function TimelineLane(props: TimelineLaneProps) {
    const { items, minDate } = props;

    const daysBetween = (a: Date, b: Date) =>
        Math.round((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));

    const itemColor = (id: number) => {
        const color = itemColors[id % itemColors.length];
        return color;
    }

    const DAY_WIDTH = 101;

    return (
        <Box
            height="30px"
            display="flex"
            alignItems="center"
        >
            {items.map((item) => {
                const start = new Date(item.start);
                const end = new Date(item.end);

                const startOffset = daysBetween(minDate, start);
                const duration = daysBetween(start, end) + 1;

                return (
                    <Box
                        key={item.id}
                        position="absolute"
                        left={startOffset * DAY_WIDTH}
                        width={(duration * DAY_WIDTH) - 1}
                        height="30px"
                        bgcolor="#fff"
                        borderRadius="6px"
                        fontSize={13}
                        fontWeight={500}
                        boxShadow="0 2px 4px rgba(0,0,0,0.2)"
                        sx={{
                            border: `1px solid ${itemColor(item.id)}`,
                            borderBottom: `4px solid  ${itemColor(item.id) || "#C8D8EB"}`,
                            transition: "all 0.3s",
                            "&:hover": {
                                boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.2)",
                                bgcolor: "#eaeaea",
                                cursor: "pointer",
                            }
                        }}
                    >
                        <Tooltip title={item.name} arrow>
                            <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="100%" px={1}>
                                <Typography fontSize={14} noWrap>
                                    {item.name}
                                </Typography>
                            </Box>
                        </Tooltip>
                    </Box>
                );
            })}
        </Box>
    );
}
