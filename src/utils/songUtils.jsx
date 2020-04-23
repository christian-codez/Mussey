export const playSong = (audioRef, action) => {
  action();
  audioRef.current.play();
};
