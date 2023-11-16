import { Heading, Text, Button, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../Solutions/SolutinsCss/Finance.css";
function Finance() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="finance-upper-text-parent">
        <div className="finance-upper-text">
          <Heading as={"h2"}>
            Innovative finance teams transform their business with Airtable
          </Heading>
          <Text as={"p"}>
            Capture the inputs you need for planning and reporting, manage
            budget and expenses, and improve your workflows.
          </Text>
        </div>
        <div className="finance-upper-text-button">
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

      <div className="finance-image-text-parent">
        <div className="finance-image-text">
          <Heading as={"h2"}>
            Streamline your financial workflows and process
          </Heading>
          <Text as={"p"}>
            Organize cross-functional requests, data, and information in one
            place to understand your company’s financial needs and plan for the
            future.
          </Text>
        </div>
        <div className="finance-image">
          <Image src="https://images.ctfassets.net/wl95ljfippl8/2V2kYxpyI0DBxhsi0OXk1n/fb64f0a281702267ceb0a31ce1908c8b/Group_1338__1_.png?w=1920" />
        </div>
      </div>

      <div className="finance-image-text-parent-2">
        <div className="finance-image-text-2">
          <Heading as={"h2"}>Track expenses and budgets in real-time</Heading>
          <Text as={"p"}>
            Easily create and share reports with your team. Build custom reports
            to track budget spend, purchase approvals, and more.
          </Text>
        </div>
        <div className="finance-image-2">
          <Image src="https://images.ctfassets.net/wl95ljfippl8/12t2Mqsw9jjNyLSP89mlmJ/5270d4d3ba6a401f611651025564186c/functions-finance-lp_feature-2.png?w=1920" />
        </div>
      </div>

      <div className="finance-image-text-parent-2">
        <div className="finance-image-2">
          <Image src="https://images.ctfassets.net/wl95ljfippl8/W0X6Nu9pRC8yBXyyY7NUC/0ae4baeb308c6ad5ff051f79d641dfd7/functions-finance-lp_feature-3.png?w=1920" />
        </div>
        <div className="finance-image-text-2">
          <Heading as={"h2"}>
            Accelerate and automate your financial reporting process
          </Heading>
          <Text as={"p"}>
            Speed up repetitive work for your finance team. Create automated
            tasks for closing the books, triggered notifications for payment
            dates, and more.
          </Text>
        </div>
      </div>
    </div>
  );
}

export default Finance;
