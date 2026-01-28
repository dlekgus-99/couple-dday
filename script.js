function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function calculateDday(startDateStr) {
  const year = parseInt(startDateStr.substring(0, 4));
  const month = parseInt(startDateStr.substring(4, 6)) - 1;
  const day = parseInt(startDateStr.substring(6, 8));

  const startDate = new Date(year, month, day);
  const today = new Date();

  const diffTime = today - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;

  return diffDays;
}

const start = getQueryParam("start");
const title = getQueryParam("title");

if (!start || !title || !/^\d{8}$/.test(start)) {
  document.body.innerHTML = "";
  throw new Error("Invalid access");
}

document.getElementById("title").innerText = title;
document.getElementById("dday").innerText = "D+" + calculateDday(start);
