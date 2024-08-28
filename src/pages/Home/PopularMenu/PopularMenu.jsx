import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";

function PopularMenu() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="mb-12">
      <SectionTitle heading="From Our Menu" subHeading="Popular Items" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {menu.map((menu) => (
          <MenuItem key={menu._id} item={menu} />
        ))}
      </div>
    </div>
  );
}

export default PopularMenu;
