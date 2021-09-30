import "./features.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function Features() {
  return (
    <div className="fratures">
      <div className="featureItems">
        <span className="featureTitel">Revanue</span>
        <div className="featureMonyContainer">
          <span className="featureMoney">$2123</span>
          <span className="featureMoneyRate">
            -13 <ArrowDownward className="iconArrow negtive" />{" "}
          </span>
        </div>
        <span className="featureSub">Compare to last month</span>
      </div>
      <div className="featureItems">
        <span className="featureTitel">Revanue</span>
        <div className="featureMonyContainer">
          <span className="featureMoney">$2103</span>
          <span className="featureMoneyRate">
            -13 <ArrowDownward className="iconArrow negtive" />{" "}
          </span>
        </div>
        <span className="featureSub">Compare to last month</span>
      </div>
      <div className="featureItems">
        <span className="featureTitel">Revanue</span>
        <div className="featureMonyContainer">
          <span className="featureMoney">$1234</span>
          <span className="featureMoneyRate">
            +05 <ArrowUpward className="iconArrow" />{" "}
          </span>
        </div>
        <span className="featureSub">Compare to last month</span>
      </div>
    </div>
  );
}
