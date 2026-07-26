const timeFormat = (minutes) => {
    const hours = Math.floor(minutes/60);
    const reimaginingMinutes = minutes % 60;
    return `${hours}hr ${reimaginingMinutes}m` 
}

export default timeFormat