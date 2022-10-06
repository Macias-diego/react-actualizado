import "./Home.css";
import { SubMenu } from "../SubMenu/SubMenu.js";
import { Footer } from "../Footer/Footer.js";
export function Home() {
  let descripcionBanda =
    "Formed by the brothers Sakis and Themis Tolis, in their beginnings the group played a raw mixture of death metal with elements of grindcore. A year later the band decides to turn their style to death metal and black metal in the vein of Bathory and Venom.";

  return (
    <>
      <div className="banner"></div>
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center"> ROTTING CHRIST</h1>
              <p className="text-center">{descripcionBanda}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SubMenu></SubMenu>
        
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}
