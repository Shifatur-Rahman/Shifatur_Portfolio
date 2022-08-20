import Charts from "./components/Charts/Charts";
import ClientReview from "./components/ClientReview/ClientReview";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import Summary from "./components/Summary/Summary";
import TopBanner from "./components/TopBanner/TopBanner";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import VideoSection from "./components/VideoSection/VideoSection";

function App() {
  return (
    <>
      <TopNavigation />
      <TopBanner />
      <Services />
      <Charts />
      <Summary />
      <Projects />
      <VideoSection />
      <ClientReview />
      <Footer />
    </>
  );
}

export default App;
