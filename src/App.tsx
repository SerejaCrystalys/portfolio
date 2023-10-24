import HelloTab from "./Tabs/HelloTab/hello-tab";
import Header from "./components/header/header";
import Section from "./components/sections/section";

function App() {
  return (
    <>
      <Header />
      <Section children={<HelloTab />} />
      <Section children={<HelloTab />} />
      <Section children={<HelloTab />} />
    </>
  );
}

export default App;
