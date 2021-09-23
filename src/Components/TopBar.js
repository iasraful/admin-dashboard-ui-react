import "./topBar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
export default function TopBar() {
  return (
    <div className="topBar">
      <div className="topWrapper">
        <div className="topLeft">
          <span className="logo">Logo</span>
        </div>
        <div className="topRight">
          <div className="notiIcon">
            <NotificationsNone />
            <span className="iconBadge">2</span>
          </div>
          <div className="notiIcon">
            <Language />
            <span className="iconBadge">2</span>
          </div>
          <div className="notiIcon">
            <Settings />
          </div>
          <img
            src="https://assets.materialup.com/uploads/b78ca002-cd6c-4f84-befb-c09dd9261025/preview.png"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
