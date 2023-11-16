import React from "react";
import { useNavigate } from "react-router-dom";
import { Image, Text, Heading, Button } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import "./SolutinsCss/Products.css";
import Part1 from "./MarketingAnimatedPhoto/Part1";
import Part2 from "./MarketingAnimatedPhoto/Part2";
import Part3 from "./MarketingAnimatedPhoto/Part3";
import Part4 from "./MarketingAnimatedPhoto/Part4";


function Marketing() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="product-parent">
        <div className="product-text">
          <Heading as={"h2"}>Drive marketing impact and innovation</Heading>
          <Text as={"p"}>
            Redefine your marketing with a single source of truth. Connect data
            and apps across teams to deliver creative campaigns that move the
            business forward.
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
            url={"https://www.youtube.com/watch?v=q5p1Z07HC0k&t=2s"}
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
          <Heading as={"h2"}>Why Airtable works for Marketing teams</Heading>
          <Text as={"p"}>
            Deliverables, campaign milestones, digital asset management: in
            Airtable, they all move in sync. So everyone—from execs to Content
            to Creative—has the info needed to multiply their impact.
          </Text>
        </div>
        <div className="why-airtable-works-for-product-team-image">
          <Image
            src="https://images.ctfassets.net/wl95ljfippl8/KY7N4qVboMGQmcBKAuzCN/31f3e3394b91d543728763ee9ee6ecee/Tier1_Solutions__Marketing.png?w=1920"
            alt="products team"
          />
        </div>
      </div>

      <div className="feedback-parent">
        <div className="feedback-text-heading-top">
          <Heading as={"h2"}>Redefine marketing strategy and planning</Heading>
          <Text color={"#787B82"} as={"p"}>
            Connect work at every level and amplify impact when you centralize
            ideas, requests, and plans in Airtable.
          </Text>
        </div>

        <div>
          <Part1 />
        </div>

        <div className="feedback-text-heading-top">
          <Heading as={"h2"}>Drive airtight timelines and production</Heading>
          <Text color={"#787B82"} as={"p"}>
            Go beyond work management to manage deliverables, handoffs, and
            production at scale.
          </Text>
        </div>

        <div>
          <Part2 />
        </div>

        <div className="feedback-text-heading-top">
          <Heading as={"h2"}>
            Maximize ROI from shared marketing investments
          </Heading>
          <Text color={"#787B82"} as={"p"}>
            Work more efficiently when you create shared repositories of
            vendors, assets, inventory, and more.
          </Text>
        </div>

        <div>
          <Part3 />
        </div>

        <div className="feedback-text-heading-top">
          <Heading as={"h2"}>Connect marketing work with impact</Heading>
          <Text color={"#787B82"} as={"p"}>
            Drive strategy with insights, not instinct. Eliminate guesswork from
            data and connect cross-team work.
          </Text>
        </div>

        <div>
          <Part4 />
        </div>
      </div>

      <div onClick={() => navigate("/platform/Ai")} className="power-ai-parent">
        <div className="power-ai-image">
          <Image
            src="https://images.ctfassets.net/wl95ljfippl8/3A4DJ97WpYcLgr1OgPMRWp/6aab638ed985dd6e43c78901d6da2443/Marketing_Solution_AI__2_.png?w=1920"
            alt="power ai"
          />
        </div>
        <div className="power-ai-text">
          <Heading as={"h4"} color={"#4D5665"}>
            Now in beta
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

export default Marketing;
