import "./topBar.css";
import { NotificationsNone } from "@material-ui/icons";
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
          </div>
        </div>
      </div>
    </div>
  );
}
