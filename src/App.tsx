import HelloTab from "./components/Tabs/HelloTab/hello-tab";
import Section from "./components/sections/section";

function App() {
  return (
    <>
      <Section children={<HelloTab />} />
    </>
  );
}

export default App;
