const MenuPage = ({ menu }) => (
  <>
    <h1>Menu</h1>
    {menu.map((item, index) => (
      <p key={index}>
        {item.name} - {item.price}
      </p>
    ))}
  </>
);

export default MenuPage;
