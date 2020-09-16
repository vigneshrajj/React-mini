import React from "react";
import "./styles.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

export default function App() {
  const Card = styled.div`
    background-color: #272121;
    width: 200px;
    height: auto;
    padding-bottom: 15px;
    float: left;
    box-shadow: -5px 0px 8px rgba(0, 0, 0, 0.3);
    border-radius: 20px 20px 0 20px;
    &:hover {
      transition: 0.2s ease-in-out;
      margin-bottom: 8px;
    }
  `;
  const Container = styled.div`
    margin: 5px;
    padding: 10px;
    display: flex;
    height: 100vh;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    & ${Card}:hover ~ ${Card} {
      transition: 0.2s;
      transform: translateX(20px);
    }
    & ${Card} + ${Card} {
      position: relative;
      margin-left: -30px;
    }
    @media (max-width: 800px) {
      height: auto;
      flex-direction: column;
      & ${Card} {
        margin-top: 30px;
      }
      & ${Card}:hover ~ ${Card} {
        transform: translateX(0px);
      }
    }
  `;
  const Img = styled.img`
    margin-top: -30px;
    width: 90px;
    border-radius: 50%;
    border: 5px solid #272121;
  `;
  const H1 = styled.h1`
    background-color: #272121;
    font-weight: lighter;
    font-size: 20px;
    color: white;
    text-align: center;
  `;
  const P = styled.p`
    padding: 15px;
    background-color: #272121;
    font-weight: 100;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.7);
    text-align: justify;
  `;
  const Icons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: #272121;
    padding-bottom: 4px;
  `;
  return (
    <Container>
      <Card>
        <Img src="https://randomuser.me/api/portraits/men/38.jpg" />
        <H1>Finnlay Cowan</H1>
        <P>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
        </P>
        <Icons>
          <FontAwesomeIcon
            style={{ backgroundColor: "#272121" }}
            icon={faFacebook}
            color="white"
          />
          <FontAwesomeIcon
            style={{ backgroundColor: "#272121" }}
            icon={faGithub}
            color="white"
          />
          <FontAwesomeIcon
            style={{ backgroundColor: "#272121" }}
            icon={faTwitter}
            color="white"
          />
        </Icons>
      </Card>
      <Card>
        <Img src="https://randomuser.me/api/portraits/men/39.jpg" />
        <H1>Rayan Mcloughlin</H1>
        <P>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
        </P>
        <Icons>
          <FontAwesomeIcon
            style={{ backgroundColor: "#272121" }}
            icon={faFacebook}
            color="white"
          />
          <FontAwesomeIcon
            style={{ backgroundColor: "#272121" }}
            icon={faGithub}
            color="white"
          />
          <FontAwesomeIcon
            style={{ backgroundColor: "#272121" }}
            icon={faTwitter}
            color="white"
          />
        </Icons>
      </Card>
      <Card>
        <Img src="https://randomuser.me/api/portraits/men/37.jpg" />
        <H1>Garfield Bolton</H1>
        <P>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
        </P>
        <Icons>
          <FontAwesomeIcon
            style={{ backgroundColor: "#272121" }}
            icon={faFacebook}
            color="white"
          />
          <FontAwesomeIcon
            style={{ backgroundColor: "#272121" }}
            icon={faGithub}
            color="white"
          />
          <FontAwesomeIcon
            style={{ backgroundColor: "#272121" }}
            icon={faTwitter}
            color="white"
          />
        </Icons>
      </Card>
      <Card>
        <Img src="https://randomuser.me/api/portraits/men/36.jpg" />
        <H1>Jamelia Mcdermott</H1>
        <P>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
        </P>
        <Icons>
          <FontAwesomeIcon
            style={{ backgroundColor: "#272121" }}
            icon={faFacebook}
            color="white"
          />
          <FontAwesomeIcon
            style={{ backgroundColor: "#272121" }}
            icon={faGithub}
            color="white"
          />
          <FontAwesomeIcon
            style={{ backgroundColor: "#272121" }}
            icon={faTwitter}
            color="white"
          />
        </Icons>
      </Card>
      <Card>
        <Img src="https://randomuser.me/api/portraits/men/35.jpg" />
        <H1>Zac Rennie</H1>
        <P>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard
        </P>
        <Icons>
          <FontAwesomeIcon
            style={{ backgroundColor: "#272121" }}
            icon={faFacebook}
            color="white"
          />
          <FontAwesomeIcon
            style={{ backgroundColor: "#272121" }}
            icon={faGithub}
            color="white"
          />
          <FontAwesomeIcon
            style={{ backgroundColor: "#272121" }}
            icon={faTwitter}
            color="white"
          />
        </Icons>
      </Card>
    </Container>
  );
}
