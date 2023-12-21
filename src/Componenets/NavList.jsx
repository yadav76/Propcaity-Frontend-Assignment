import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import {
  LightbulbOutlined as Lightbulb,
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const NavList = () => {
  const navList = [
    { id: 1, name: "Notes", icon: <Lightbulb />, route: "/" },
    { id: 2, name: "Archives", icon: <Archive />, route: "/archive" },
    { id: 3, name: "Trash", icon: <Delete />, route: "/delete" },
  ];

  return (
    <List>
      {navList.map((list) => (
        <ListItem button key={list.id}>
          <Link
            to={`${list.route}`}
            style={{
              textDecoration: "none",
              display: "flex",
              color: "inherit",
            }}
          >
            <ListItemIcon style={{ alignItems: "center" }}>
              {list.icon}
            </ListItemIcon>
            <ListItemText primary={list.name} />
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;

// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import { LightbulbOutlinedIcon as NotesIcon } from "@mui/icons-material/LightbulbOutlined";
// import { ArchiveOutlinedIcon as ArchiveIcon } from "@mui/icons-material/ArchiveOutlined";
// import { DeleteOutlineOutlinedIcon as TrashIcon } from "@mui/icons-material/DeleteOutlineOutlined";

// const NavList = () => {
//   const ListObj = [
//     { id: 1, name: "Notes", icon: <NotesIcon /> },
//     { id: 1, name: "Archive", icon: <ArchiveIcon /> },
//     { id: 1, name: "Trash", icon: <TrashIcon /> },
//     { id: 1, name: "Reminders", icon: <NotesIcon /> },
//   ];

//   return (
//     <List>
//       {ListObj.map((list) => (
//         <ListItem button key={list.id}>
//           <ListItemIcon>{list.icon}</ListItemIcon>
//           <ListItemText primary={list.name} />
//         </ListItem>
//       ))}
//     </List>
//   );
// };

// export default NavList;
