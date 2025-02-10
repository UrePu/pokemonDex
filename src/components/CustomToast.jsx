import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
const StyledToast = styled(ToastContainer)`
  .Toastify__toast {
    background-color: #f8f9fa;
    color: black;
    width: 400px;
    border-radius: 10px;
    font-size: 17px;
    justify-content: center;
  }
`;
const CustomToast = () => {
  return (
    <StyledToast
      position="top-center" // 알람 위치 지정
      autoClose={2000} // 자동 off 시간
      hideProgressBar={false} // 진행시간바 숨김
      closeOnClick // 클릭으로 알람 닫기
      rtl={false} // 알림 좌우 반전
      pauseOnFocusLoss // 화면을 벗어나면 알람 정지
      draggable // 드래그 가능
      theme="light"
      // limit={1} // 알람 개수 제한
    />
  );
};

export default CustomToast;
