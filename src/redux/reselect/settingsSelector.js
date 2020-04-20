import { createSelector } from 'reselect';

const selectSettings = state => state.settings;

export const selectSettingsVolume = createSelector(
  [selectSettings],
  settings => settings.volume
);
