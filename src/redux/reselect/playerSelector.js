import { createSelector } from 'reselect';

const selectPlayer = state => state.player;

export const selectPlayerStatus = createSelector(
  [selectPlayer],
  player => player.playerStatus
);

export const selectRepeat = createSelector(
  [selectPlayer],
  player => player.repeat
);

export const selectRepeatQueue = createSelector(
  [selectPlayer],
  player => player.repeatQueue
);
