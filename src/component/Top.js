import { Header, Menu, Input } from "semantic-ui-react";
import Link from "next/link";
import Gnb from "./Gnb";

export default function Top() {
  const activeItem = "home";
  return (
    <>
      <div>
        <div style={{ display: "flex", paddingTop: 30 }}>
          <Link href={"/"}>
            <div style={{ flex: "100px 0 0" }}>
              <img
                src="/images/dune.png"
                alt="logo"
                style={{ display: "block", width: 80, cursor: "pointer" }}
              />
            </div>
          </Link>

          <Header as="hi"> Next JS</Header>
        </div>

        <Gnb />
      </div>
    </>
  );
}
