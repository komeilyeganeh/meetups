import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function HomeLayout({ children }) {
  return (
    <>
      <Header />
      <main>
        <div className="mt-28">
          <div className="container">
            {/* Meetups Render */}
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
