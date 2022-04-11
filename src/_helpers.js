import moment from 'moment-timezone';

export const convertDateToUCT = (dateValue) => {
    dateValue = new Date(dateValue * 1000);

    var dateFormat = 'MM-DD-YYYY HH:mm:ss';
    var testDateUtc = moment.utc(dateValue);
    var localDate = testDateUtc.local();

    console.log(localDate.format(dateFormat));

    return localDate.format(dateFormat);
};

// dateValue = localDate.format(dateFormat);
// console.log(dateValue);
// let dateJan = new Date(dateValue.getFullYear(), 0, 1);
// let dateJul = new Date(dateValue.getFullYear(), 6, 1);

// let timezoneOffset = Math.max(dateJan.getTimezoneOffset(), dateJul.getTimezoneOffset());

// // Check if daylight savings
// if (dateValue?.getTimezoneOffset() < timezoneOffset) {
//     // Adjust date by 5 hours
//     dateValue = new Date(dateValue?.getTime() - 1 * 60 * 60 * 1000 * 5);
//     console.log(dateValue);
// } else {
//     // Adjust date by 6 hours
//     dateValue = new Date(dateValue?.getTime() - 1 * 60 * 60 * 1000 * 6);
//     console.log(dateValue);
// }
