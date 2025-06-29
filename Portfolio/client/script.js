function animateProgress(circleClass, valueClass, endValue, color) {
  let circle = document.querySelector(circleClass);
  let valueText = document.querySelector(valueClass);
  if (!circle || !valueText) return;

  let currentValue = 0;

  const interval = setInterval(() => {
    currentValue++;
    valueText.textContent = `${currentValue}%`;
    circle.style.background = `conic-gradient(${color} ${currentValue * 3.6}deg, #ededed 0deg)`;

    if (currentValue === endValue) clearInterval(interval);
  }, 20);
}

// Create observer for each skill circle
const skills = [
  { circle: ".html", value: ".html-progress", percent: 90, color: "#f5b505" },
  { circle: ".CSS", value: ".CSS-progress", percent: 75, color: "#6f34fe" },
  { circle: ".Javascript", value: ".Javascript-progress", percent: 65, color: "#f80707" },
  { circle: ".bootstrap", value: ".bootstrap-progress", percent: 90, color: "#3f396d" },
  { circle: ".reactjs", value: ".reactjs-progress", percent: 40, color: "#45cdfb" },
  { circle: ".javapython", value: ".javapython-progress", percent: 85, color: "#d8f11a" },
  { circle: ".sql", value: ".sql-progress", percent: 50, color: "#20c934" },
  { circle: ".gitHub", value: ".gitHub-progress", percent: 80, color: "#020109" }
];

skills.forEach((skill) => {
  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateProgress(skill.circle, skill.value, skill.percent, skill.color);
        observerInstance.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const element = document.querySelector(skill.circle);
  if (element) observer.observe(element);
});
