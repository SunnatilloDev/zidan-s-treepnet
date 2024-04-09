import Menu from "../components/Menu";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className='menu_item'>
        <Menu />
      </div>
      <div className="children">{children}</div>
    </div>
  );
};

export default Layout;
