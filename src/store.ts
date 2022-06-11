import { writable } from 'svelte/store';

const TIMESHEET_URL_STORAGE_KEY = 'timesheet-url';

const storedTimesheetUrl =
  localStorage.getItem(TIMESHEET_URL_STORAGE_KEY) ?? '';
export const timesheetUrl = writable(storedTimesheetUrl);
timesheetUrl.subscribe(value => {
  localStorage.setItem(TIMESHEET_URL_STORAGE_KEY, value);
});
