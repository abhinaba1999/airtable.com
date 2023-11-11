import { Heading, Text, Button,Image } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
import './PlatformCss/ConnectedData.css';
import { useNavigate } from "react-router-dom";

function ConnectedData() {
  const navigate=useNavigate()
  return (
    <div>
      <div className="connected-data-powerful-data-model-parent">
        <div className="connected-data-powerful-data-model-text">
          <Heading as={"h2"}>Build on the most powerful data model</Heading>
          <Text>
            Airtable’s relational database flexes and scales to meet the needs
            of any enterprise.
          </Text>
          <div className="connected-data-powerful-data-model-button">
            <Button
              onClick={() => navigate("/sign-up-for-free")}
              style={{ background: "#254FAD", color: "white" }}
            >
              Sign Up For Free
            </Button>
            <Button onClick={() => navigate("/Contact-Sales")}>
              Contact Sales
            </Button>
          </div>
        </div>
        <div className="connected-data-powerful-data-model-video">
          <ReactPlayer
            width="100%"
            height="100%"
            playing={true}
            loop
            muted
            url={
              "https://videos.ctfassets.net/wl95ljfippl8/42ejHobVH9I22vWbvgRJeF/f5b5539ee416b68df82e58e2c8732551/Tier1_Data_Hero_2560x1920__1_.mp4"
            }
          />
        </div>
      </div>
      <div className="connected-data-product-marketing-parent">
        <div className="connected-data-product-marketing-text">
          <Heading as={"h2"}>
            Make data actionable across your organization
          </Heading>
          <Text as={"p"}>
            Create an accessible and secure source of truth to ensure the data
            you build with is what's most important to your organization.
          </Text>
        </div>
        <div className="connected-data-product-marketing-image">
          <Image
            src="https://images.ctfassets.net/wl95ljfippl8/eZLLdRf7a32EpjPKPUMol/9942e760ee43e43e2232578c234bfa56/Data3x.webp?w=1920"
            alt="Product-marketing"
          />
        </div>
      </div>
      <div className="Verify-key-company-data-sets-parent">
        <div className="Verify-key-company-data-sets-image">
          <Image
            src="https://images.ctfassets.net/wl95ljfippl8/2dSwRslxab6gqgpnddvOdF/52e79ae26dbee32315bbf587f90d1b26/Tier1_Data_Verified_Data.png?w=1920"
            alt="Verify key company"
          />
        </div>
        <div className="Verify-key-company-data-sets-text">
          <Heading as={"h2"}>Verify key company data sets</Heading>
          <Text as={"p"}>
            Bring critical data into Airtable and share it across your
            organization. With trusted data, teams can build for maximum impact.
          </Text>
        </div>
      </div>
      <div className="Verify-key-company-data-sets-parent">
        <div className="Verify-key-company-data-sets-text">
          <Heading as={"h2"}>Keep teams aligned with Sync</Heading>
          <Text as={"p"}>
            Sync ensures updates are reflected across teams and workflows in
            real-time, so you can reduce confusion and keep moving quickly.
          </Text>
        </div>
        <div className="Verify-key-company-data-sets-image">
          <Image
            src="https://images.ctfassets.net/wl95ljfippl8/7ruZpWPfs2LjZbSslnKNjd/563b7d3683a3d5362329add2b6e6afa3/Tier1_Data_Sync.png?w=1920"
            alt="Verify key company"
          />
        </div>
      </div>
      <div className="Verify-key-company-data-sets-parent">
        <div className="Verify-key-company-data-sets-image">
          <Image
            src="https://images.ctfassets.net/wl95ljfippl8/7JpcoBRwPGEhfpYLYMWNQ1/24238dbb58465eb09c6a6e9ce52eee24/Tier1_Data_External_Sync.png?w=1920"
            alt="Verify key company"
          />
        </div>
        <div className="Verify-key-company-data-sets-text">
          <Heading as={"h2"}>Bring all of your workflows together</Heading>
          <Text as={"p"}>
            Bring data into Airtable from other business-critical tools—like
            Jira, Salesforce, and Box—so all systems are always up-to-date.
          </Text>
        </div>
      </div>
    </div>
  );
}

export default ConnectedData;
