const rootElement = document.getElementById("root");

function clock() {
  const date = new Date().toLocaleTimeString();
  const element = `<div>
                      <h1>Horário</h1>
                        <p>${date}</p>
                      </div>`;
  rootElement.innerHTML = element;
}

setInterval(clock, 1000);
clock();
