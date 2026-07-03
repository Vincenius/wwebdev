// Content dates are stored as ISO `YYYY-MM-DD` strings (src/data) and only
// formatted for display here. Formatting is pinned to UTC so build output is
// deterministic regardless of the machine's timezone (no TZ=UTC hack needed).
const display = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    timeZone: 'UTC',
})

/** '2023-11-10' → 'November 10, 2023' (site display format). */
export const formatDisplayDate = (iso: string): string => display.format(new Date(iso))

/** '2023-11-10' → '2023-11-10T00:00:00.000Z' (datetime attributes, JSON-LD). */
export const toISODateTime = (iso: string): string => new Date(iso).toISOString()
