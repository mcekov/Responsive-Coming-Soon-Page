const countdown = document.querySelector('.countdown');

// Set launch date

const launchDate = new Date('Dec 4, 2019, 08:00:00').getTime();

// Update every second

const intvl = setInterval(() => {
  // Get today's date and time in ms
  const now = new Date().getTime();

  // Get distance from now to launch
  const distance = launchDate - now;

  // Calc time
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  countdown.innerHTML = `
      <div>${days} <span>Days</span></div>
      <div>${hours} <span>Hours</span></div>
      <div>${minutes} <span>Minutes</span></div>
      <div>${seconds} <span>Seconds</span></div> 
    `;

  // Chek if launch date passed
  if (distance < 0) {
    clearInterval(intvl);
    countdown.style.color = '#6C7F40';
    countdown.innerHTML = 'Launched!';
  }
}, 1000);
