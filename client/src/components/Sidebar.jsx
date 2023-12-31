import React from "react";
import { useRouter } from "../hooks/useRouter.js";

const Sidebar = ({ sidebarContent, userProfile }) => {
  const { currentPath, routeTo } = useRouter();

  const sidebarMenuClickHandler = (path) => {
    // TODO 3-2: 사이드바 메뉴 클릭시 이벤트 처리
    // path argument를 받아서 routeTo 함수에 전달
    if (!path) return;
    routeTo(path);
  };

  return (
    <div className="sidebar">
      <h3 className="sidebar-title">실습 3</h3>
      <ul>
        {sidebarContent.map((element) => {
          return (
            <li
              key={element.path}
              className={
                currentPath === element.path
                  ? "sidebar-menu selected"
                  : "sidebar-menu"
              }
              onClick={() => sidebarMenuClickHandler(element.path)}
            >
              {element.label}
            </li>
          );
        })}
      </ul>
      <div>
        {userProfile ? (
          <div className="sidebar-footer">
            {userProfile.userInfo.name}님 환영합니다.
          </div>
        ) : (
          <div>로그인이 필요합니다.</div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
