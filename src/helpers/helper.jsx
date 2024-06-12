export const hasData = (data, loading, error) => {
    if (loading || error) return false;
    return data &&
        (Array.isArray(data) ? data.length > 0 : true) &&
        (data.constructor === Object ? Object.keys(data).length > 0 : true)
        ? true
        : false;
};