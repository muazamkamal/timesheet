<script lang="ts">
  import Footer from './Footer.svelte';
  import dayjs from 'dayjs';
  import dayjsBusinessTime from 'dayjs-business-time';

  // Use business time plugin
  dayjs.extend(dayjsBusinessTime);

  // Check if today is thursday
  const isThursday = dayjs().day() === 4;

  // Check if it's the last business day of the month
  const isTodayLastBusinessOfMonth =
    dayjs().isBusinessDay() &&
    dayjs().month() !== dayjs().nextBusinessDay().month();

  let message =
    isThursday || isTodayLastBusinessOfMonth
      ? `It's time for`
      : `It's not time yet for`;
</script>

<main class="h-full w-full bg-red-300 grid gap-8 main-container">
  <div
    class="w-full text-3xl sm:text-5xl flex flex-col gap-4 justify-end items-center"
  >
    {#if isThursday}
      <span>Thursday!</span>
    {/if}
    {#if isTodayLastBusinessOfMonth}
      <span>Last day of the month!</span>
    {/if}
    <span>{message}</span>
  </div>
  <div class="w-full text-6xl sm:text-9xl flex justify-center">⏰💩</div>
  <div class="flex items-end"><Footer /></div>
</main>

<style>
  .main-container {
    grid-template-rows: 1fr auto 1fr;
    grid-template-columns: 1fr;
  }
</style>
