const millisecondsToFormat = ms => {
    let milliSeconds = Number(ms)
    const seconds = Math.floor((milliSeconds / 1000) % 60);
    const minutes = Math.floor((milliSeconds / 1000 / 60) % 60);
    const hours = Math.floor(milliSeconds / 1000 / 60 / 60);

    const formattedTime = [
        pad(hours.toString(), 2),
        pad(minutes.toString(), 2),
        pad(seconds.toString(), 2),
    ].join(':');
    return formattedTime;
};

const pad = (numberString, size) => {
    let padded = numberString;
    while (padded.length < size) {
        padded = `0${padded}`;
    }
    return padded;
};

export {
    millisecondsToFormat
}

