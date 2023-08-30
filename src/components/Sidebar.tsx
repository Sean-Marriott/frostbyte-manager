"use client";
import { Avatar, Box, Stack } from "@mui/material";
import StyledPaper from "./StyledPaper";

const Sidebar = () => {
  return (
    <Stack spacing={2}>
      <div className="nav">
        <button id="menu-btn">
          <span className="material-icons-sharp">menu</span>
        </button>
        <div className="dark-mode">
          <span className="material-icons-sharp active">light_mode</span>
          <span className="material-icons-sharp">dark_mode</span>
        </div>

        <div className="profile">
          <div className="info">
            <p>
              Hey, <b>Sean</b>
            </p>
            <small className="text-muted">Admin</small>
          </div>
          <div className="profile-photo">
            <img src="/images/sean.jpg" />
          </div>
        </div>
      </div>

      <StyledPaper sx={{ p: 3, borderRadius: 7 }}>
        <Stack sx={{alignItems: 'center' }} spacing={1}>
          <Avatar
            alt="Sean Marriott Profile Picture"
            src="/images/sean.jpg"
            sx={{ width: 130, height: 130 }}
          />
          <h2>Sean Marriott</h2>
          <p>Fullstack Web Developer</p>
        </Stack>
      </StyledPaper>

      <div className="reminders">
        <div className="header">
          <h2>Reminders</h2>
          <span className="material-icons-sharp">notifications_none</span>
        </div>

        <div className="notification">
          <div className="icon">
            <span className="material-icons-sharp">handyman</span>
          </div>
          <div className="content">
            <div className="info">
              <h3>Repair</h3>
              <small className="text_muted">08:00 AM - 12:00 PM</small>
            </div>
            <span className="material-icons-sharp">more_vert</span>
          </div>
        </div>

        <div className="notification">
          <div className="icon">
            <span className="material-icons-sharp">location_on</span>
          </div>
          <div className="content">
            <div className="info">
              <h3>Pickup</h3>
              <small className="text_muted">08:00 AM - 12:00 PM</small>
            </div>
            <span className="material-icons-sharp">more_vert</span>
          </div>
        </div>

        <div className="notification add-reminder">
          <div>
            <span className="material-icons-sharp">add</span>
            <h3>Add Reminder</h3>
          </div>
        </div>
      </div>
    </Stack>
  );
};

export default Sidebar;
