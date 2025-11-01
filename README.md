# Project Reflection

## What I liked about my implementation
- I really liked how the cards align visually with the timeline days, making it easy to understand the duration of each item at a glance.
- The lane-based structure keeps the timeline organized and readable, even when there are overlapping items.
- The use of color-coded accents and borders gives each item a distinct identity while keeping the overall design minimal and clean.

## What I would change if I were to redo the project
- I would rethink the underlying data and rendering structure to make the timeline more scalable and flexible for larger datasets.
- I would add a date picker or calendar view to allow users to navigate and select a specific range of dates.
- I would include different view modes such as weekly, monthly, or quarterly, making it easier to visualize the project at various zoom levels.
- I would also improve responsiveness and horizontal scrolling, ensuring a smoother experience on smaller screens.

## Design decisions
- I took inspiration from personal side projects, especially task management and scheduling tools I have built before.
- I aimed for a simple and modern visual style, balancing readability with subtle color cues to highlight activity over time.
- I deliberately avoided libraries that already render timelines to demonstrate the logic and positioning calculations manually, focusing on the reasoning and UI details.

## How I would test this project with more time
- Write unit tests for helper functions like daysBetween, assignLanes, and the date range calculations.
- Implement visual and interaction tests (using tools like Cypress or Playwright) to ensure items render correctly when zooming or scrolling.

