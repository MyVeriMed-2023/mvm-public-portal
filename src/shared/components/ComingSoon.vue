<template>
    <section class="py-24 relative">
      <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div
          class="w-full md:px-16 px-10 md:pt-16 pt-10 pb-10 bg-gray-900 rounded-2xl flex-col justify-end items-center lg:gap-28 md:gap-16 gap-10 inline-flex">
          <div class="flex-col justify-end items-center lg:gap-16 gap-10 flex">
            <img src="@/assets/images/MyVeriMed-White-Logo.svg" alt="pagedone logo image">
            <div class="flex-col justify-center items-center gap-10 flex">
              <div class="flex-col justify-start items-center gap-2.5 flex">
                <h2
                  class="text-center text-emerald-400 md:text-6xl text-5xl font-bold font-manrope leading-normal">
                  Coming Soon
                </h2>
                <p class="text-center text-gray-500 text-base font-normal leading-relaxed">Just 20 days remaining until the big reveal of our new product!</p>
              </div>
              <div class="flex items-start justify-center w-full gap-2 count-down-main">
                <div class="timer flex flex-col gap-0.5">
                  <div class="">
                    <h3 class="countdown-element days text-center text-white text-2xl font-bold font-manrope leading-9">{{ countdown.days }}</h3>
                  </div>
                  <p class="text-center text-gray-500 text-xs font-normal leading-normal w-full">DAYS</p>
                </div>
                <h3 class="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">:</h3>
                <div class="timer flex flex-col gap-0.5">
                  <div class="">
                    <h3 class="countdown-element hours text-center text-white text-2xl font-bold font-manrope leading-9">{{ countdown.hours }}</h3>
                  </div>
                  <p class="text-center text-gray-500 text-xs font-normal leading-normal w-full">HRS</p>
                </div>
                <h3 class="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">:</h3>
                <div class="timer flex flex-col gap-0.5">
                  <div class="">
                    <h3 class="countdown-element minutes text-center text-white text-2xl font-bold font-manrope leading-9">{{ countdown.minutes }}</h3>
                  </div>
                  <p class="text-center text-gray-500 text-xs font-normal leading-normal w-full">MINS</p>
                </div>
                <h3 class="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">:</h3>
                <div class="timer flex flex-col gap-0.5">
                  <div class="">
                    <h3 class="countdown-element seconds text-center text-white text-2xl font-bold font-manrope leading-9">{{ countdown.seconds }}</h3>
                  </div>
                  <p class="text-center text-gray-500 text-xs font-normal leading-normal w-full">SECS</p>
                </div>
              </div>
              <div class="w-full flex-col justify-center items-center gap-5 flex">
                <h6 class="text-center text-emerald-400 text-base font-semibold leading-relaxed">Launched Date: July 23, 2024</h6>
                <div class="justify-center items-center gap-2.5 flex sm:flex-row flex-col">
                  <input type="text"
                    class="w-80 focus:outline-none px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed h-10 bg-white rounded-lg border border-gray-200 justify-start items-center gap-1.5 inline-flex"
                    placeholder="Type your mail...">
                  <button
                    class="sm:w-fit w-full px-3.5 py-2 bg-emerald-400 hover:bg-emerald-600 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                    <span
                      class="px-1.5 text-gray-900 text-sm font-medium leading-6 whitespace-nowrap">Notify
                      Me</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p class="text-center text-gray-500 text-sm font-normal leading-snug">Get in touch with us: <a href=""
              class="hover:text-gray-100 transition-all duration-700 ease-in-out"> mail@pagedone.com</a></p>
        </div>
      </div>
    </section>
  </template>

  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';

  // Reactive countdown data
  const countdown = ref({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  // Countdown destination date
  let dest = new Date('mar 31, 2024 23:59:59').getTime();

  // Countdown update function
  const updateCountdown = () => {
    let now = new Date().getTime();
    let diff = dest - now;

    // Check if the countdown has reached zero or negative
    if (diff <= 0) {
      // Set the destination date to the same day next month
      let nextMonthDate = new Date();
      nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);

      // If the current month is December, set the destination date to the same day next year
      if (nextMonthDate.getMonth() === 0) {
        nextMonthDate.setFullYear(nextMonthDate.getFullYear() + 1);
      }

      dest = nextMonthDate.getTime();
      return; // Exit the function
    }

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    countdown.value.days = days < 10 ? `0${days}` : days;
    countdown.value.hours = hours < 10 ? `0${hours}` : hours;
    countdown.value.minutes = minutes < 10 ? `0${minutes}` : minutes;
    countdown.value.seconds = seconds < 10 ? `0${seconds}` : seconds;
  };

  let intervalId;

  onMounted(() => {
    // Start countdown timer
    intervalId = setInterval(updateCountdown, 1000);
  });

  onUnmounted(() => {
    // Clear interval when component is unmounted
    clearInterval(intervalId);
  });
  </script>

  <style scoped>
  /* Add your styles here if needed */
  </style>
