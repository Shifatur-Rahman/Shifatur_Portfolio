import AboutDescription from "./components/AboutDescription/AboutDescription";
import PageTop from "./components/PageTop/PageTop";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ServicePage from "./pages/ServicePage";
import AppRoute from "./router/AppRoute";

function App() {
  return (
    <>
      <AppRoute />
      {/* <ServicePage /> */}
      {/* <ContactPage /> */}
      {/* <PortfolioPage /> */}
      {/* <AboutPage /> */}
      {/* <HomePage /> */}
      {/* <TopNavigation />
      <PageTop pageTitle="About Me" />
      <AboutDescription /> */}
    </>
  );
}

export default App;
