import { Header, Menu, Input } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
  const activeItem = "home";
  return (
    <>
      <div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "100px 0 0" }}>
            <img
              src="/images/dune.png"
              alt="logo"
              style={{ display: "block", width: 80 }}
            />
          </div>
          <Header as="hi"> Next JS</Header>
        </div>

        <Gnb />
      </div>
    </>
  );
}
