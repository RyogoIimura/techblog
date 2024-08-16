import { formatDistanceToNow } from "date-fns";
import { format, toZonedTime } from "date-fns-tz";

export const getDateTime = (date: Date): string => {
    const zonedTime = toZonedTime(date, "Asia/Tokyo");
    return format(zonedTime, "yyyy-MM-dd HH:mm");
};

export const getLabelTime = (date: Date): string => {
    const zonedTime = toZonedTime(date, "Asia/Tokyo");
    return formatDistanceToNow(zonedTime, { addSuffix: true });
};
