export const playSong = (audioRef, action) => {
  action();
  audioRef.current.play();
};

export const scrollToCurrentPlaying = song => {
  if (!song) return;
  const currentTrack = document.getElementById(song.id);
  if (currentTrack) {
    const topPos = currentTrack.offsetTop;
    const container = document.getElementById('playlist-section');

    document.getElementById('playlist-section').scrollTop =
      topPos - container.offsetTop;
  }
};

export const shortenString = (string, length) => {
  const strLength = string.length;
  const subString = string.substring(0, length);

  return strLength > length ? subString + ' ...' : subString;
};
