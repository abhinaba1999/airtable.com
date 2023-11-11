import { Heading, Text, Button, Image } from "@chakra-ui/react";
import React from "react";

import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import "./PlatformCss/GovernanceandScale.css";

function GovernanceandScale() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="Governance-and-Scale-parent">
        <div className="Governance-and-Scale-text">
          <Heading as={"h2"}>Deploy, govern, and scale with ease</Heading>
          <Text as={"p"} color={"#097A76"}>
            Manage users, data, and apps with confidence all on one secure
            platform.
          </Text>
          <div className="Governance-and-Scale-button">
            <Button
              style={{ background: "#254FAD", color: "white" }}
              onClick={() => navigate("/sign-up-for-free")}
            >
              Sign Up for Free
            </Button>
            <Button onClick={() => navigate("/Contact-Sales")}>
              Contact Sales
            </Button>
          </div>
        </div>
        <div className="Governance-and-Scale-video">
          <ReactPlayer
            playing={true}
            loop
            muted
            width="100%"
            height="100%"
            url={
              "https://videos.ctfassets.net/wl95ljfippl8/e3746bEe9AZDPGTxYqiE1/2638703eae74b29613e4ede0a997cab4/Governance_Anim_2000x1500.mp4"
            }
          />
        </div>
      </div>
      <div className="Governance-and-Scale-results-parent">
        <div className="Governance-and-Scale-results-text-heading">
          <Heading as={"h2"}>Results you can count on</Heading>
        </div>
        <div className="Governance-and-Scale-results-text-results-parent">
          <div className="Governance-and-Scale-results-text-results-child-1">
            <Heading as={"h2"}>5+</Heading>
            <Text as={"p"}>content tools consolidated (BET)</Text>
          </div>
          <div className="Governance-and-Scale-results-text-results-child-2">
            <Heading as={"h2"}>95%</Heading>
            <Text as={"p"}>less time spent on data entry (GitHub)</Text>
          </div>
          <div className="Governance-and-Scale-results-text-results-child-3">
            <Heading as={"h2"}>$2.6M</Heading>
            <Text as={"p"}>
              annual savings from automations (Fortune 100 company)
            </Text>
          </div>
        </div>
      </div>
      <div className="Governance-and-Scale-chart-parent">
        <div className="Governance-and-Scale-chart-image">
          <Image
            src="https://images.ctfassets.net/wl95ljfippl8/3NAU1UKhAWkQtii0vj424A/737a493f36339af4e56c7fcc280b9578/Governance-1.webp?w=1920"
            alt="business-chart"
          />
        </div>
        <div className="Governance-and-Scale-chart-text">
          <Heading as={"h2"}>Data that can scale with your business</Heading>
          <ul className="Governance-and-Scale-chart-text-list">
            <li>
              Build powerful apps with unlimited databases, users, and API calls
            </li>
            <li>Up to 500K records per database</li>
            <li>
              Highly reliable architecture with data redundancy and backup in
              multiple zones
            </li>
          </ul>
        </div>
      </div>

      <div className="Governance-and-Scale-chart-parent">
        <div className="Governance-and-Scale-chart-text">
          <Heading as={"h2"}>Flexible yet powerful administration</Heading>
          <ul className="Governance-and-Scale-chart-text-list">
            <li>
              Use Enterprise Hub to control Airtable usage across the company
            </li>
            <li>
              Assign granular permissions, provisioning, and access in the Admin
              Panel
            </li>
            <li>
              View data and reporting with audit logs, user exports and more
            </li>
          </ul>
        </div>
        <div className="Governance-and-Scale-chart-image">
          <Image
            src="https://images.ctfassets.net/wl95ljfippl8/9P0ILsNzFBPkvUG1DEROY/54b519feaaca9f8eb2c4eadb2798fce3/Governance-2.webp?w=1920"
            alt="business-chart"
          />
        </div>
      </div>

      <div className="Governance-and-Scale-chart-parent">
        <div className="Governance-and-Scale-chart-image">
          <Image
            src="https://images.ctfassets.net/wl95ljfippl8/goCNHNnjhzOkQbinylFyn/471e17376d073233d6a73bb7686ea652/Governance-3__1_.webp?w=1920"
            alt="business-chart"
          />
        </div>
        <div className="Governance-and-Scale-chart-text">
          <Heading as={"h2"}>
            Get peace of mind with enterprise-grade security
          </Heading>
          <ul className="Governance-and-Scale-chart-text-list">
            <li>
              Control data access via encryption keys using Enterprise Key
              Management
            </li>
            <li>
              Control data access via encryption keys using Enterprise Key
              Management Detect and prevent security breaches with Data Loss
              Prevention
            </li>
            <li>Compliant with ISO 27001, SOC 2, and GDPR</li>
          </ul>
        </div>
      </div>

      <div className="Governance-and-Scale-chart-parent-2">
        <div className="Governance-and-Scale-chart-text">
          <Heading as={"h2"}>
            Get peace of mind with enterprise-grade security
          </Heading>
          <ul className="Governance-and-Scale-chart-text-list">
            <li>
              Control data access via encryption keys using Enterprise Key
              Management
            </li>
            <li>
              Control data access via encryption keys using Enterprise Key
              Management Detect and prevent security breaches with Data Loss
              Prevention
            </li>
            <li>Compliant with ISO 27001, SOC 2, and GDPR</li>
          </ul>
        </div>
        <div className="Governance-and-Scale-chart-image">
          <Image
            src="https://images.ctfassets.net/wl95ljfippl8/goCNHNnjhzOkQbinylFyn/471e17376d073233d6a73bb7686ea652/Governance-3__1_.webp?w=1920"
            alt="business-chart"
          />
        </div>
      </div>
    </div>
  );
}

export default GovernanceandScale;
