export const seriesMatches = {
  select: (res) => {
    console.log(res.data.seriesMatches);
    return res.data.seriesMatches
  },
  retry: 1,
  refetchOnWindowFocus: false,
  cacheTime: 0,
};

export default {
  select: (res) => res.data,
  retry: 1,
  refetchOnWindowFocus: false,
  cacheTime: 0,
};