import { Heading, Text, Button, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../Solutions/SolutinsCss/Operation.css";

function Operations() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="operations-Upper-Text-Parent">
        <div className="operations-Upper-Text-Text">
          <Heading as={"h2"}>
            Forward-thinking operations teams build on Airtable
          </Heading>
          <Text as={"p"}>
            Bring all your data together, create and standardize your workflows,
            and hit ambitious business goals.
          </Text>
          <div className="operations-Upper-Text-Button">
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
      </div>

      <div className="operations-Image-Parent">
        <div className="operations-Image-Text">
          <Heading as={"h2"}>
            Visualize your most important data in one place
          </Heading>
          <Text as={"p"}>
            Connect initiatives happening across your business in a single
            source of truth to keep teams aligned and work on track.
          </Text>
        </div>
        <div className="operations-Image-Image">
          <Image
            src="https://images.ctfassets.net/wl95ljfippl8/6U38zfJK6K7rxHMyMiIn6r/6b09e9051598c6bb3f591d692e9caa86/functions-lp_ops_headline_1x.png?w=1920"
            alt="Damo1"
          />
        </div>
      </div>

      <div className="operations-Text-fulfillment-Parent">
        <div className="operations-Text-fulfillment-Image">
          <Image
            src="https://images.ctfassets.net/wl95ljfippl8/YlpMqJqv4y3LYVi2h2x5k/fa04cecffe4550e651ae94bf5302a251/functions-lp_ops_feature-2_1x.png?w=1920"
            alt="fulfillment"
          />
        </div>
        <div className="operations-Text-fulfillment-Text">
          <Heading as={"h2"}>Keep initiatives on track as work changes</Heading>
          <Text as={"p"}>
            Spot gaps and timing conflicts, stay agile as requirements and
            timelines shift, and make updates to your plan as needed to hit
            deadlines.
          </Text>
        </div>
      </div>

      <div className="operations-Text-fulfillment-Parent">
        <div className="operations-Text-fulfillment-Text">
          <Heading as={"h2"}>Create real-time dashboards</Heading>
          <Text as={"p"}>
            Easily share status updates and keep leadership informed on progress
            with customizable dashboards that track what’s most important.
          </Text>
        </div>
        <div className="operations-Text-fulfillment-Image">
          <Image
            src="https://images.ctfassets.net/wl95ljfippl8/2AGFSHEkXIwYKxRtgNZhJ4/fb82a7066286b671cd2b97418f7e1b42/Group_1238__1_.png?w=1920"
            alt="fulfillment"
          />
        </div>
      </div>

      <div className="operations-Text-fulfillment-Parent">
        <div className="operations-Text-fulfillment-Image">
          <Image
            src="https://images.ctfassets.net/wl95ljfippl8/2m9Qs9xfsRLKuaYfXWLqgi/858c1552dcfb63099b47943d5f01f5b6/Group_1239.png?w=1920"
            alt="fulfillment"
          />
        </div>
        <div className="operations-Text-fulfillment-Text">
          <Heading as={"h2"}>Make data-driven decisions</Heading>
          <Text as={"p"}>
            Audit vendors, programs, and processes based on performance data to
            ensure you make the right decisions for your business.
          </Text>
        </div>
      </div>

      <div className="operations-Text-fulfillment-Parent">
        <div className="operations-Text-fulfillment-Text">
          <Heading as={"h2"}>
            Streamline ordering, work requests, and fulfillment
          </Heading>
          <Text as={"p"}>
            Set up automations that increase efficiency and help you standardize
            how requests get made and orders get fulfilled.
          </Text>
        </div>
        <div className="operations-Text-fulfillment-Image">
          <Image
            src="https://images.ctfassets.net/wl95ljfippl8/1D0PyVB3q5i0mCg9lF9ihO/fbd773952665d76f4294b6003820ab01/operations-streamline-ordering-image.webp?w=1920"
            alt="fulfillment"
          />
        </div>
      </div>
    </div>
  );
}

export default Operations;
