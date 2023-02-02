import Experience from "./Experience";
import Training from "./Training";

export default function Skills() {

  return (
    <div id="skills" className="row px-lg-5 m-lg-5 shadow-lg rounded">
        <div className="col-lg-6 p-0">
          <Experience />
        </div>
        <div className="col-lg-6 p-0">
          <Training />
        </div>
      </div>
  );
}
