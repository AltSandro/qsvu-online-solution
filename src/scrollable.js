const table = document.getElementById("scrollableTable");

table.addEventListener("scroll", () => {
  if (table.scrollWidth > table.clientWidth) {
    table.classList.add("scrollable");
  } else {
    table.classList.remove("scrollable");
  }
});

let isDragging = false;
let startX;
let scrollLeft;

table.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - table.offsetLeft;
  scrollLeft = table.scrollLeft;
});

table.addEventListener("mouseleave", () => {
  isDragging = false;
});

table.addEventListener("mouseup", () => {
  isDragging = false;
});

table.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - table.offsetLeft;
  const walk = (x - startX) * 2;
  table.scrollLeft = scrollLeft - walk;
});

table.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].pageX - table.offsetLeft;
  scrollLeft = table.scrollLeft;
});

table.addEventListener("touchend", () => {
  isDragging = false;
});

table.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.touches[0].pageX - table.offsetLeft;
  const walk = (x - startX) * 2;
  table.scrollLeft = scrollLeft - walk;
});
