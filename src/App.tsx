import AboutTab from "./Tabs/AboutTab/about_tab";
import ContactsTab from "./Tabs/ContactsTab/contacts_tab";
import HelloTab from "./Tabs/HelloTab/hello-tab";
import ProjectsTab from "./Tabs/ProjectsTab/projects-tab";
import StackTab from "./Tabs/stack_section";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Section from "./components/sections/section";

function App() {
  return (
    <>
      <Header />

      <Section id="hello" centered children={<HelloTab />} />
      <Section id="about" centered children={<AboutTab />} />
      <Section id="stack" children={<StackTab />} />
      <Section id="projects" children={<ProjectsTab />} />
      <Section id="sayhi" centered children={<ContactsTab />} />
    </>
  );
}

export default App;
