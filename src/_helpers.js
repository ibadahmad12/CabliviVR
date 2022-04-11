export const convertDateToUCT = (dateValue) => {
    let dateJan, dateJul, timezoneOffset;

    dateValue = new Date(dateValue * 1000);

    dateJan = new Date(dateValue.getFullYear(), 0, 1);
    dateJul = new Date(dateValue.getFullYear(), 6, 1);

    timezoneOffset = Math.max(dateJan.getTimezoneOffset(), dateJul.getTimezoneOffset());

    // Check if daylight savings
    if (dateValue.getTimezoneOffset() < timezoneOffset) {
        // Adjust date by 5 hours
        dateValue = new Date(dateValue.getTime() - 1 * 60 * 60 * 1000 * 5);
    } else {
        // Adjust date by 6 hours
        dateValue = new Date(dateValue.getTime() - 1 * 60 * 60 * 1000 * 6);
    }

    return dateValue;
};
