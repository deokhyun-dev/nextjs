import { Header, Menu, Input } from "semantic-ui-react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Gnb() {
  const [activeItem, setActiveItem] = useState("home");
  const router = useRouter();
  // console.log(router);

  const goLink = (e, data) => {
    setActiveItem(data.name);
    router.push(`/${data.name}`);
  };

  return (
    <>
      <Menu secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={goLink}
        />
        <Menu.Item
          name="about"
          active={activeItem === "about"}
          onClick={goLink}
        />
        <Menu.Item
          name="contact"
          active={activeItem === "contact"}
          onClick={goLink}
        />
      </Menu>
    </>
  );
}
