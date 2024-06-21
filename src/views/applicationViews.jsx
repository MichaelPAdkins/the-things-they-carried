import { useEffect, useState } from "react";
import { Home } from "../components/home/home.jsx";
import { Outlet, Route, Routes } from "react-router-dom";
// import { Articles } from "../components/articles/articles";
// import { NewArticle } from "../components/articles/newArticle";
import { Navbar } from "../components/navbar/navbar";
// import { ImageGallery } from "../components/images/ImageGallery";
// import { NewImage } from "../components/images/NewImage";
// import { UpdateImage } from "../components/images/UpdateImage";
// import { TaskEventContainer } from "../components/TaskEventContainer.jsx";
// import { EventCreateForm } from "../components/forms/EventCreateForm.jsx";
// import { EditArticle } from "../components/articles/editArticle";
// import { TaskCreateForm } from "../components/forms/TaskCreateForm.jsx";
// import { Chat } from "../components/chat/chat.jsx";
// import { EditChat } from "../components/chat/editChat.jsx";
// import { EditEvent } from "../components/forms/EventEditForm.jsx";
// import { EditTask } from "../components/forms/TaskEditForm.jsx";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localCarry_user = localStorage.getItem("carry_user");
    const carry_userObject = JSON.parse(localCarry_user);
    setCurrentUser(carry_userObject);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Outlet />
          </>
        }
      >
        <Route path="/" element={<Home currentUser={currentUser} />} />
        {/* <Route path="articles">
          <Route index element={<Articles currentUser={currentUser} />} />
          <Route
            path=":articleId/editArticle"
            element={<EditArticle currentUser={currentUser} />}
          />
        </Route>
        <Route
          path="newArticle"
          element={<NewArticle currentUser={currentUser} />}
        />
        <Route path="images">
          <Route index element={<ImageGallery currentUser={currentUser} />} />
          <Route
           
            path=":newImage"
           
            element={<NewImage currentUser={currentUser} />}
         
          />
        </Route>
        <Route
          path="/editImages/:imageId"
          element={<UpdateImage currentUser={currentUser} />}
        />
        \
        <Route path="/chat">
          <Route index element={<Chat currentUser={currentUser} />} />
          <Route
            path=":chatId/editChat"
            element={<EditChat currentUser={currentUser} />}
          />
        </Route>
        <Route
          path="/editImages/:imageId"
          element={<UpdateImage currentUser={currentUser} />}
        />

        <Route path="TaskEventContainer">
          <Route
            index
            element={<TaskEventContainer currentUser={currentUser} />}
          />
          <Route
            path="createEvent"
            element={<EventCreateForm currentUser={currentUser} />}
          />
          <Route
            path="createTask"
            element={<TaskCreateForm currentUser={currentUser} />}
          />
          <Route
            path=":eventId/editEvent"
            element={<EditEvent currentUser={currentUser} />}
          />
          <Route
            path=":taskId/editTask"
            element={<EditTask currentUser={currentUser} />}
          />
        </Route>*/}
      </Route> 
    </Routes>
  );
};