function updateclock() {
  const timeElement = document.getElementById("time");
  const dateElement = document.getElementById("date");

  const now = new Date();

  const hours = now.getHours() % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const datestring = now.toLocaleDateString(undefined, options);

  timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
  dateElement.textContent = `${datestring}`;
}

setInterval(updateclock, 1000);
updateclock();
