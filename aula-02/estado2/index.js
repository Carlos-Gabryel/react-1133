const rootDiv = document.getElementById("root");
const rootElement = ReactDOM.createRoot(rootDiv);
rootElement.render(<App />);

function List(props) {
  const { items } = props;

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function Input(props) {
  const { onEnter } = props;
  const [value, setValue] = React.useState("");

  function keyUp({ code }) {
    if (code === "Enter") {
      onEnter(value);
    }
  }

  return (
    <input
      type="text"
      value={value}
      onInput={(event) => setValue(event.target.value)}
      onKeyUp={keyUp}
    />
  );
}

function App() {
  const [listItems, setListItems] = React.useState(["items 1", "items 2"]);

  const handleOnEnter = (item) => {
    const newItems = [...listItems, item];
    setListItems(newItems);
  };

  return (
    <>
      <h1>Olá, mundo!</h1>
      <p>Esse é o meu primeiro componente com React.</p>
      <Input onEnter={handleOnEnter} />
      <List items={listItems} />
    </>
  );
}
