import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage";
import ExampleRoom from "./pages/ExampleRoom/ExampleRoom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreateRoomPage1 from "./pages/CreateRoom/CreateRoomPage1";
import CreateRoomPage2 from "./pages/CreateRoom/CreateRoomPage2";
import CreateRoomPage3 from "./pages/CreateRoom/CreateRoomPage3";
import CreateRoomPage4 from "./pages/CreateRoom/CreateRoomPage4";
import CreateRoomPage5 from "./pages/CreateRoom/CreateRoomPage5";
import ExampleRoomItemsPage from "./pages/ExampleRoom/ExampleRoomItemsPage";
import UserRoom from "./pages/UserRoom/UserRoom";
import EnterRoom from "./pages/RoomSearch/EnterRoom";
import UserRoomItemsPage from "./pages/UserRoom/UserRoomItemsPage";
import CreateRoomPageVoice from "./pages/CreateRoom/CreateRoomPageVoice";
import React from "react";

function Main() {
  const isLogin = false;
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/createRoom/1" element={<CreateRoomPage1 />} />
          <Route path="/createRoom/2" element={<CreateRoomPage2 />} />
          <Route path="/createRoom/3" element={<CreateRoomPage3 />} />
          <Route path="/createRoom/4" element={<CreateRoomPage4 />} />
          <Route path="/createRoom/5" element={<CreateRoomPage5 />} />
          <Route path="/createRoom/voice" element={<CreateRoomPageVoice />} />
          <Route path="/enterRoom" element={<EnterRoom />} />
        </Route>
        <Route path="/exampleRoom" element={<ExampleRoom />} />
        <Route path="/exampleRoom/items" element={<ExampleRoomItemsPage />} />
        <Route path="/userRoom" element={<UserRoom />} />
        <Route path="/userRoom/items" element={<UserRoomItemsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
