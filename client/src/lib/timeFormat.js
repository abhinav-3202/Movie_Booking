const timeFormat = (minutes)=>{
    const hours = Math.floor(minutes/60);
    const minutesRemain = minutes%60;
    return `${hours}h ${minutesRemain}m`
}

export default timeFormat