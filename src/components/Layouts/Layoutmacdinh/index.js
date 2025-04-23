import Header from "./Header";
import Footer from "./Footter";
function Layoutmacdinh({ children }) {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      {children}
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Layoutmacdinh;
