import Axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";

export default function Admin() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  async function checkLogin() {
    Axios.get("/api/isLogin").then((res) => {
      if (res.status === 200 && res.data.name) {
        // 로그인 된 상태
        setIsLogin(true);
      } else {
        router.push("/login");
      }
    });
  }

  const logout = () => {
    Axios.get("/api/logout").then((res) => {
      if (res.status === 200) {
        console.log(res);
        router.push("/home");
      }
    });
  };

  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <>
      <div>어드민</div>
      {isLogin && <Button onClick={logout}>로그아웃</Button>}
    </>
  );
}
