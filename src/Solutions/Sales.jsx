import { Heading, Text, Button, Image } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Solutions/SolutinsCss/Sales.css'
function Sales() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="sales-upper-text-parent">
        <div className="sales-upper-text">
          <Heading as={"h2"}>
            Customer-facing teams build lifelong champions with Airtable
          </Heading>
          <Text>
            Keep sales and account management teams in sync, create smarter
            processes, and win loyal customers.
          </Text>
        </div>
        <div className="sales-upper-text-button">
          <Button
            style={{ background: "#254FAD", color: "white" }}
            onClick={() => navigate("/sign-up-for-free")}
          >
            Sign Up For Free
          </Button>
          <Button onClick={() => navigate("/Contact-Sales")}>
            Contact Sales
          </Button>
        </div>
      </div>

      <div className="sales-image-text-parent">
        <div className="sales-image-text">
          <Heading as={"h2"}>Collaborate across customer-facing teams</Heading>
          <Text as={"p"}>
            Break down silos to speed up customer handoffs and create a cohesive
            customer experience.
          </Text>
        </div>
        <div className="sales-image-full-width">
          <Image src="https://images.ctfassets.net/wl95ljfippl8/5vOD6sWmQsdZM6LFeXsipB/2c188414cb0574847f96f8d38242f2a8/Group_1336.png?w=1920" />
        </div>
      </div>

      <div className="sales-customer-workflows-text-parent">
        <div className="sales-customer-workflows-text">
          <Heading as={"h2"}>Standardize important customer workflows</Heading>
          <Text as={"p"}>
            Move faster and give customers a positive experience by
            standardizing your most important workflows in Airtable.
          </Text>
        </div>
        <div className="sales-customer-workflows-image-full-width">
          <Image src="https://images.ctfassets.net/wl95ljfippl8/2A1jyz9H9ktF6HVERefSWM/383a7364c9751d9d6350cd2f434874ac/functions-sales-lp_feature-2.png?w=1920" />
        </div>
      </div>

      <div className="sales-customer-workflows-text-parent">
        <div className="sales-customer-workflows-image-full-width">
          <Image src="https://images.ctfassets.net/wl95ljfippl8/3BzsPJ0v0xKrgoBTVbICu3/4c42ee9d2a57d2d96820c4e160df116b/functions-sales-lp_feature-3.png?w=1920" />
        </div>
        <div className="sales-customer-workflows-text">
          <Heading as={"h2"}>Save time on repeatable processes</Heading>
          <Text as={"p"}>
            Create custom automations, like sharing Slack updates when customers
            complete training, to keep work moving forward.
          </Text>
        </div>
      </div>
    </div>
  );
}

export default Sales
