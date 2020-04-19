import { createSelector } from 'reselect';

const selectPlayer = state => state.player;

export const selectPlayerStatus = createSelector(
  [selectPlayer],
  player => player.playerStatus
);
