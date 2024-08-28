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
    </div>
  );
}

export default MenuCategory;
