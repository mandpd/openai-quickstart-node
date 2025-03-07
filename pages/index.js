import Head from "next/head";
import {
  useState
} from "react";
import styles from "./index.module.css";

export default function Home() {
  const [textInput, setTextInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: textInput
      }),
    });
    const data = await response.json();
    setResult(data.result);
    setTextInput("");
  }

  return ( <
    div >
    <
    Head >
    <
    title > OpenAI Quickstart < /title> <
    link rel = "icon"
    href = "/dog.png" / >
    <
    /Head>

    <
    main className = {
      styles.main
    } >
    <
    img src = "/dog.png"
    className = {
      styles.icon
    }
    /> <
    h3 > Name my pet < /h3> <
    form onSubmit = {
      onSubmit
    } >
    <
    input type = "text"
    name = "text"
    placeholder = "Enter text to parse"
    value = {
      textInput
    }
    onChange = {
      (e) => setTextInput(e.target.value)
    }
    /> <
    input type = "submit"
    value = "Find Entities" / >
    <
    /form> <
    div className = {
      styles.result
    } > {
      result
    } < /div> < /
    main > <
    /div>
  );
}