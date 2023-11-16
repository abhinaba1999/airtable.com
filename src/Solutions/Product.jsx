import React from "react";
import { useNavigate } from "react-router-dom";
import { Image, Text, Heading, Button } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import "./SolutinsCss/Products.css";
import Part1 from "./ProductAnimatedPhoto/Part1";
import Part2 from "./ProductAnimatedPhoto/Part2";
import Part3 from "./ProductAnimatedPhoto/Part3";

function Product() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="product-parent">
        <div className="product-text">
          <Heading as={"h2"}>
            Finally, real flexibility for product teams
          </Heading>
          <Text as={"p"}>
            Say goodbye to rigid tooling. Airtable gives you all you need to
            fuel your product engine, then lets you drive it your way.
          </Text>
          <div className="product-button">
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
        <div className="product-video">
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            url={"https://www.youtube.com/watch?v=gyKaRrGReiE"}
            controls={true}
          />
        </div>
      </div>

      <div className="trusted-by-companies-parent">
        <Text as={"p"}>Trusted by leading companies of all sizes</Text>
        <Image
          src="https://images.ctfassets.net/wl95ljfippl8/4HY0ggp2rLujEyLOnl4AXt/6cb29a600b951ed7d53f3c2fc469ae0e/Frame_1771.svg?w=1920"
          alt="image 1"
        />
        <Image
          src="https://images.ctfassets.net/wl95ljfippl8/7iPSmV2gGEZXX7sy6GBUzX/27459a7d2e73ce17eaa66a4988cbdc91/frame.svg?w=1920"
          alt="image 2"
        />
        <Image
          src="https://images.ctfassets.net/wl95ljfippl8/6ncbs7NER6atSr6hxMUIPq/a9c08f4271c21903991dbe79092f857b/Buzzfeed_2.svg?w=1920"
          alt="image 3"
        />
        <Image
          src="https://images.ctfassets.net/wl95ljfippl8/6mE0HATTd8nPI25nTCxnyT/f66717b783bb92d24338156d6b627418/Frame_1773.svg?w=1920"
          alt="image 4"
        />
      </div>

      <div className="why-airtable-works-for-product-team-parent">
        <div className="why-airtable-works-for-product-team-text">
          <Heading as={"h2"}>Why Airtable works for Product teams</Heading>
          <Text as={"p"}>
            In Airtable your roadmaps, customer feedback, and sprint schedules
            all connect, so they're always in sync. With the right data in hand,
            teams can focus on delivering products customers love, faster.
          </Text>
        </div>
        <div className="why-airtable-works-for-product-team-image">
          <Image
            src="https://images.ctfassets.net/wl95ljfippl8/651lvInVysccg8XVGwUgJx/acdfe18289f6a06fd54350c57382fec6/Tier1_Solutions_Solutions_Product.png?w=1920"
            alt="products team"
          />
        </div>
      </div>

      <div className="feedback-parent">
        <div className="feedback-text-heading-top">
          <Heading as={"h2"}>Plan and prioritize as an organization</Heading>
          <Text color={"#787B82"} as={"p"}>
            Stay aligned on every initiative (and connected across every team)
            while keeping granular visibility into OKRs.
          </Text>
        </div>

        <div>
          <Part1 />
        </div>

        <div className="feedback-text-heading-top">
          <Heading as={"h2"}>Centralize and analyze all your feedback</Heading>
          <Text color={"#787B82"} as={"p"}>
            Bringing your customers’ insights into one place ensures you’re
            moving development in the right direction.
          </Text>
        </div>

        <div>
          <Part2 />
        </div>

        <div className="feedback-text-heading-top">
          <Heading as={"h2"}>Build a living roadmap</Heading>
          <Text color={"#787B82"} as={"p"}>
            Build, manage, and deliver a roadmap that can power your whole
            organization, yet is stretchy enough to adjust to the unexpected.
          </Text>
        </div>

        <div>
          <Part3 />
        </div>
      </div>

      <div onClick={() => navigate("/platform/Ai")} className="power-ai-parent">
        <div className="power-ai-image">
          <Image
            src="https://images.ctfassets.net/wl95ljfippl8/5ns9cl9rlS9F1AUnQheteL/09a754419b9eff4493ee38b47b89f978/Product_Solution_AI__1_.png?w=1920"
            alt="power ai"
          />
        </div>
        <div className="power-ai-text">
          <Heading as={"h4"} color={"#4D5665"}>
            In Beta
          </Heading>
          <Heading as={"h2"} color={"#254FAD"}>
            Transform every workflow with the power of AI
          </Heading>
          <Text as={"p"} color={"#91979F"}>
            Whether you’re generating product specs, summarizing meetings, or
            categorizing product feedback, the power of AI will transform your
            teams’ ability to drive results.
          </Text>
          <div>
            <Button>Learn more</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
