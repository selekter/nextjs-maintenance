export const formatDateThai = (date: any) => {
  const dateThai = new Date(date).toLocaleDateString("th-TH", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return dateThai;
};
