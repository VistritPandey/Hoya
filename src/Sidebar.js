import { Avatar, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { AddOutlined, SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return()=>{
      unsubscribe();
    }
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat room");
    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <IconButton>
        <Avatar onClick={auth.signOut()} src={user?.photoURL}/>
        </IconButton>
        <IconButton>
            <AddOutlined onClick={createChat}/>
          </IconButton>
    </div>
      <div className="sidebar__chats">
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
