import WelcomeMessage from "./WelcomeMessage.js";
import Header from "./Header.js";
import MainContent from "./MainContent.js";
import Footer from "./Footer.js";
import UserProfile from "./UserProfile.js";

function App() {
  return (
    <>
      <WelcomeMessage />;
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </>
  );
}

export default App;
