export const convertTime = (dateTime: string): string => {
  return new Date(dateTime).toLocaleString("et-EE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};
