const showTimeFormat = (timeStr) => {

  const date = new Date(timeStr);

  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return formattedTime;
};

export default showTimeFormat;