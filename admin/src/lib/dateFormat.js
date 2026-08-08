const dateFormat = (dateStr) => {
  const date = new Date(dateStr);

  const day = date.getDate();
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const year = date.getFullYear();

  return { day, month, year };
};

export default dateFormat;