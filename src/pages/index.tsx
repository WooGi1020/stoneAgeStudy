import styles from "#styles/index.module.css";
import Header from "components/Header";
import Input from "components/Input";
import { useState } from "react";

const MainPage = () => {
  const [text, setText] = useState<string>("");

  const handleText = (value: string) => {
    setText(value);
  };

  return (
    <main className={styles.main}>
      <Header text={text} />
      <Input handleText={handleText} />
    </main>
  );
};

export default MainPage;
