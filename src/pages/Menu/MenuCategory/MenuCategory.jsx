import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";

function MenuCategory({ items, title, img }) {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title} />}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
        {items.map((menu) => (
          <MenuItem key={menu._id} item={menu} />
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          Order Now
        </button>
      </Link>
    </div>
  );
}

export default MenuCategory;
