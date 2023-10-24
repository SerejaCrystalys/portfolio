import HelloTab from "./Tabs/HelloTab/hello-tab";
import ProjectsTab from "./Tabs/ProjectsTab/projects-tab";
import Header from "./components/header/header";
import Section from "./components/sections/section";

function App() {
  return (
    <>
      <Header />
      <Section children={<HelloTab />} />
      <Section children={<ProjectsTab />} />
      <Section children={<HelloTab />} />
    </>
  );
}

export default App;
