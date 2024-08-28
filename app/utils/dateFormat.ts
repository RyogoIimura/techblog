import { formatDistanceToNow } from "date-fns";
import { toZonedTime } from "date-fns-tz";

export const getFormatLabelTime = (date: string | Date): string => {
    const zonedTime = toZonedTime(date, "Asia/Tokyo");
    return formatDistanceToNow(zonedTime, { addSuffix: true });
};

export const getFormatParseDateTime = (dateString: string): Date => {
    const zonedTime = toZonedTime(new Date(dateString), "Asia/Tokyo");
    return zonedTime
}

export const getNowParseDateTime = (): Date => {
    const zonedTime = toZonedTime(new Date(), "Asia/Tokyo");
    return zonedTime
}

export const getLabelTime = (date: Date): string => {
    const zonedTime = toZonedTime(date, "Asia/Tokyo");
    return formatDistanceToNow(zonedTime, { addSuffix: true });
};
