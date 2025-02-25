import Header from "./Header.jsx";
import MainContent from "./MainContent.jsx";
import Footer from "./Footer.jsx";
import UserProfile from "./UserProfile.jsx";
import WelcomeMessage from "./WelcomeMessage.jsx";
import Counter from "./Counter.jsx";

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <WelcomeMessage />
      <Counter />
    </>
  );
}
