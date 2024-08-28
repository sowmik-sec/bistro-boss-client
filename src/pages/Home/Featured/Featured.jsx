import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
function Featured() {
  return (
    <div className="featured-item text-white pt-10 my-20">
      <SectionTitle subHeading="check it out" heading="Featured Item" />
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 28, 2024</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            labore commodi harum cupiditate dolor dolorum est impedit! Sit
            explicabo possimus fugiat architecto. Facere reprehenderit, quas
            voluptatem sunt accusamus deserunt ipsum, aliquam magnam dignissimos
            harum quod inventore. Unde explicabo debitis numquam, voluptate
            fugit commodi impedit deserunt autem ad similique labore cum.
          </p>
          <button className="btn btn-outline">Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
