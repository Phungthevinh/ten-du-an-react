import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <NavLink to={`/`}>trang chủ</NavLink>
        <NavLink to={`/dang-ky`}>Đăng Ký</NavLink>
    </div>
  );
}

export default Header;
