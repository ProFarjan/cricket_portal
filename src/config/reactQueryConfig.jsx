export const seriesMatches = {
  select: (res) => res.data.seriesMatches,
  retry: 1,
  refetchOnWindowFocus: false,
  cacheTime: 0,
};

export const top5Matches = {
  select: (res) => res.data.matches,
  retry: 1,
  refetchOnWindowFocus: false,
  cacheTime: 0,
};

export default {
  select: (res) => {
    console.log(res.data);
    return res.data;
  },
  retry: 1,
  refetchOnWindowFocus: false,
  cacheTime: 0,
};