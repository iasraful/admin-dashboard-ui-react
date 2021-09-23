import "./Sidebar.css";
import {
  BlurLinear,
  Timeline,
  TrendingUp,
  AllInclusive,
  AttachMoney,
  AddToQueue,
  ChangeHistory,
  Person,
  AlternateEmail,
  Feedback,
  Sms,
  Assessment,
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarItems">
              <BlurLinear className="sidebarIcon" />
              Home
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarItems">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarItems">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarItems">
              <Person className="sidebarIcon" />
              User
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarItems">
              <AddToQueue className="sidebarIcon" />
              Products
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarItems">
              <AttachMoney className="sidebarIcon" />
              Transcations
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarItems">
              <ChangeHistory className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Notifactions</h3>
          <ul className="sidebarList">
            <li className="sidebarItems">
              <AlternateEmail className="sidebarIcon" />
              Mail
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarItems">
              <Feedback className="sidebarIcon" />
              Feedback
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarItems">
              <Sms className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarItems">
              <BlurLinear className="sidebarIcon" />
              Manage
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarItems">
              <AllInclusive className="sidebarIcon" />
              Analytics
            </li>
          </ul>
          <ul className="sidebarList">
            <li className="sidebarItems">
              <Assessment className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
