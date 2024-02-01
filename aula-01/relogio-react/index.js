const rootElement = document.getElementById("root");

function clock() {
  const time = new Date().toLocaleString();
  const element = (
    <div>
      <h1>Horário</h1>
      <p>{time}</p>
    </div>
  );
  // rootElement.innerHTML = element;
  ReactDOM.render(element, rootElement);
}

setInterval(clock, 1000);
clock();
