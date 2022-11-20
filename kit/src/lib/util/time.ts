
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const currentYear = () => new Date(Date.now()).getFullYear();

type DateString = string | Date;

function getDayMonthYear(dateString: DateString) {
    const dateObj = new Date(dateString);
    const y = dateObj.getFullYear();
    const m = dateObj.getUTCMonth();
    const d = dateObj.getDate();

    return [ d, m, y ];
}

export function getPostFormattedDate(dateString: DateString) {

    const [ d, m, y ] = getDayMonthYear(dateString);

    let formattedDate = `${months[m]} ${y}`;

    if (y === currentYear()) {
        formattedDate = `${months[m]} ${d}`;
    }

    return formattedDate;
}

export function getFullFormattedDate(dateString: DateString) {
    const [ d, m, y ] = getDayMonthYear(dateString);

    return`${months[m]} ${d}, ${y}`;
}