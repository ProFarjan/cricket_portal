export const hasData = (data, loading, error) => {
    if (loading || error) return false;
    return data &&
        (Array.isArray(data) ? data.length > 0 : true) &&
        (data.constructor === Object ? Object.keys(data).length > 0 : true)
        ? true
        : false;
};

export const shortTxt = (str, length) => {
    return str.length > length ? str.slice(0, length) + '...' : str;
};

export const capitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1);
}

export const dateFormat = (dateStr) => {
    const dateObj = new Date(dateStr.replace(" ", "T"));
    const formattedDate = dateObj.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });
    return formattedDate;
}