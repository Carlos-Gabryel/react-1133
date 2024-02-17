import React from "react";
import ReactDOM from "react-dom/client";
import { Counter } from "./scripts-useState/01.jsx";
import { Form } from "./scripts-useState/02.jsx";
import { DynamicList } from "./scripts-useState/03.jsx";
import { Tabs } from "./scripts-useState/04.jsx";
import { FetchData } from "./scripts-useEffect/01.jsx";
import { Timer } from "./scripts-useEffect/02.jsx";
import { AutoSaveForm } from "./scripts-useEffect/03.jsx";
import { ScrollSpy } from "./scripts-useEffect/04.jsx";
import { FocusInput } from "./scripts-useRef/01.jsx";
import { CounterWithRef } from "./scripts-useRef/02.jsx";
import { MeasureElement } from "./scripts-useRef/03.jsx";
import { Modal } from "./scripts-useRef/04.jsx";
import { DraggableElement } from "./scripts-useRef/05.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Counter />
    <Form />
    <DynamicList />
    <FetchData />
    <Timer />
    <AutoSaveForm />
    <ScrollSpy />
    <FocusInput />
    <CounterWithRef />
    <MeasureElement />
    <Modal onClose={() => {}} />
    <DraggableElement />
  </React.StrictMode>
);
