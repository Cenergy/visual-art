/* eslint-disable    */
import React, { Component } from "react";
// eslint-disable-next-line
import "./index.css";
import { TweenMax, TimelineMax } from "gsap";
import * as ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import * as planetaryjs from "planetary.js";
import Globe from "../../services/globe";
import Scene from "../../services/scene";

export default class Hello extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <section id="intro">
            <header>
              <h1 id="heading">
                Hello,
                <br />
                I’m Dandy Weng, <br />
                an autodidact.
              </h1>
              <h2 id="subheading">
                And I love traveling, photography,
                <br />
                design and programming.
              </h2>
              <div id="slice-left" className="slice left"></div>
              <div id="slice-right" className="slice right"></div>
            </header>
          </section>

          <section id="content">
            <p id="text-become-autodidact">
              Instead of going to schools like most people,
              <br />I chose to become an autodidact.
            </p>
            <p id="text-learn-from">
              I learn everything from nature, and the internet.
            </p>

            <p id="traveling">
              There are no ways to learn from nature except traveling,
              <br />
              and luckily, that's exactly what I love.
            </p>

            <div id="globe-container">
              <canvas id="globe"></canvas>
            </div>
          </section>

          <section id="photography">
            <p>
              Traveling makes me love photography even more,
              <br />
              and vice versa.
            </p>

            <div id="group">
              <img alt="" id="photo-a" src="../../assets/images/8b6df735.jpg" />
              <img alt="" id="photo-b" src="../../assets/images/f7e20fb5.jpg" />
              <img alt="" id="photo-c" src="../../assets/images/dc4a72be.jpg" />
              <img alt="" id="photo-d" src="../../assets/images/c76d0cd3.jpg" />
              <img alt="" id="photo-e" src="../../assets/images/1739332d.jpg" />
              <img alt="" id="photo-f" src="../../assets/images/99117f15.jpg" />
              <img alt="" id="photo-g" src="../../assets/images/dd84e443.jpg" />
              <img alt="" id="photo-h" src="../../assets/images/83b278df.jpg" />
            </div>
          </section>

          <section id="programming">
            <p>
              Driven by the curiosity for new technologies,
              <br />
              I’m self-teaching programming via the internet.
            </p>

            <div id="nodes">
              <img
                alt=""
                id="node-scroll-button"
                src="images/arrow.svg"
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="800">
                <g stroke="#979797" fill="none">
                  <path d="M212 453l-81-88m81 88l47-88-77-55" />
                  <path d="M272 310l-13 55m-47 88l85 83-25 83m25-83l87 63m73-146l-160 83m160-83l91 103 106 58m-106-58l-57 83" />
                  <path d="M548 556l182-103M548 556l-9 161m9-161l933 183 65-195m-998 12l46 112M297 536l58 124m-58-124l-3 233m3-233l-217-2m217 2L64 599l-42 38" />
                  <path d="M297 536L50 683m247-147l40 181" />
                  <path d="M297 536l151 234M297 536L37 759m260-223L175 249" />
                  <path d="M175 249l84 116m-129 0l45-116m283.5 204L376 362m-.5-2l42-51M374 361l-12-92m96.5 184L621 367l17-61" />
                  <path d="M457 453l85-144" />
                  <path d="M457 453l79-198m194 198l62-79-15-120m16 120l107-68m-44-110l-63 177m0 0l-53 200m321-120l47-94" />
                  <path d="M1061 453l-48 103M730 453l283 103m48-103l98 115m-98-115v156" />
                  <path d="M1061 453l66 302m-66-302L925 602l-72-68-60-160" />
                  <path d="M1061 453L746 692 297 536m764-83l-29 226m29-226l-70 317m70-317l18-151m151 151l89 113 52 63-76 60-108-62-28-59zm330 0l-14 91-78 47m78-47l48 53m-48-53l-19 114" />
                  <path d="M1546 544l86 148m-72-239l66-111 20-91m-86 202l-66-89 29-79m-29 79l-80-122m-353 211L900 676m-154 16l103 55m-226 0l85 43m-85-43h226M297 536L193 710" />
                  <path d="M297 536l-95 121m1557-204l-34 87 99 38.5z" />
                  <path d="M1824 579l-54 71-11-197" />
                  <path d="M1061 453l709 197M297 536l326 211" />
                </g>
                <g fill="#404040">
                  <text>
                    <tspan x="226" y="459">
                      Web
                    </tspan>
                  </text>
                  <circle cx="212" cy="453" r="4" />
                  <text>
                    <tspan x="744" y="459">
                      Artificial Intelligence
                    </tspan>
                  </text>
                  <circle cx="730" cy="453" r="4" />
                  <text>
                    <tspan x="1075" y="459">
                      iOS
                    </tspan>
                  </text>
                  <circle cx="1061" cy="453" r="4" />
                  <text>
                    <tspan x="471" y="459">
                      Server
                    </tspan>
                  </text>
                  <circle cx="457" cy="453" r="4" />
                  <text>
                    <tspan x="1772" y="459">
                      AR/VR
                    </tspan>
                  </text>
                  <circle cx="1758" cy="453" r="4" />
                  <text>
                    <tspan x="1244" y="459">
                      Internet of Things
                    </tspan>
                  </text>
                  <circle cx="1230" cy="453" r="4" />
                  <text>
                    <tspan x="1574" y="459">
                      Databases
                    </tspan>
                  </text>
                  <circle cx="1560" cy="453" r="4" />
                  <text>
                    <tspan x="1027" y="562">
                      Swift
                    </tspan>
                  </text>
                  <circle cx="1013" cy="556" r="4" />
                  <text>
                    <tspan x="1122" y="365">
                      Objective-C
                    </tspan>
                  </text>
                  <circle cx="1108" cy="359" r="4" />
                  <text>
                    <tspan x="311" y="542">
                      JavaScript
                    </tspan>
                  </text>
                  <circle cx="297" cy="536" r="4" />
                  <text>
                    <tspan x="273" y="371">
                      CSS
                    </tspan>
                  </text>
                  <circle cx="259" cy="365" r="4" />
                  <text>
                    <tspan x="144" y="370">
                      HTML
                    </tspan>
                  </text>
                  <circle cx="130" cy="364" r="4" />
                  <text>
                    <tspan x="562" y="562">
                      Python
                    </tspan>
                  </text>
                  <circle cx="548" cy="556" r="4" />
                  <text>
                    <tspan x="1333" y="572">
                      C++
                    </tspan>
                  </text>
                  <circle cx="1319" cy="566" r="4" />
                  <text>
                    <tspan x="635" y="373">
                      PHP
                    </tspan>
                  </text>
                  <circle cx="621" cy="367" r="4" />
                  <text>
                    <tspan x="430" y="316">
                      Docker
                    </tspan>
                  </text>
                  <circle cx="416" cy="310" r="4" />
                  <text>
                    <tspan x="376" y="271">
                      Kubernetes
                    </tspan>
                  </text>
                  <circle cx="362" cy="265" r="4" />
                  <text>
                    <tspan x="556" y="315">
                      Nginx
                    </tspan>
                  </text>
                  <circle cx="542" cy="309" r="4" />
                  <text>
                    <tspan x="550" y="261">
                      Apache
                    </tspan>
                  </text>
                  <circle cx="536" cy="255" r="4" />
                  <text>
                    <tspan x="668" y="620">
                      Flask
                    </tspan>
                  </text>
                  <circle cx="654" cy="614" r="4" />
                  <text>
                    <tspan x="607" y="674">
                      Django
                    </tspan>
                  </text>
                  <circle cx="593" cy="668" r="4" />
                  <text>
                    <tspan x="807" y="379">
                      Machine Learning
                    </tspan>
                  </text>
                  <circle cx="793" cy="373" r="4" />
                  <text>
                    <tspan x="754" y="579">
                      Turi Create
                    </tspan>
                  </text>
                  <circle cx="740" cy="573" r="4" />
                  <text>
                    <tspan x="867" y="540">
                      Create ML
                    </tspan>
                  </text>
                  <circle cx="853" cy="534" r="4" />
                  <text>
                    <tspan x="1508" y="370">
                      Cache
                    </tspan>
                  </text>
                  <circle cx="1494" cy="364" r="4" />
                  <text>
                    <tspan x="791" y="260">
                      Image Classification
                    </tspan>
                  </text>
                  <circle cx="777" cy="254" r="4" />
                  <text>
                    <tspan x="870" y="202">
                      Image Recognition
                    </tspan>
                  </text>
                  <circle cx="856" cy="196" r="4" />
                  <text>
                    <tspan x="914" y="312">
                      TensorFlow
                    </tspan>
                  </text>
                  <circle cx="900" cy="306" r="4" />
                  <text>
                    <tspan x="505" y="645">
                      PIL
                    </tspan>
                  </text>
                  <circle cx="491" cy="639" r="4" />
                  <text>
                    <tspan x="652" y="311">
                      WordPress
                    </tspan>
                  </text>
                  <circle cx="638" cy="305" r="4" />
                  <text>
                    <tspan x="1173" y="574">
                      HomeKit
                    </tspan>
                  </text>
                  <circle cx="1159" cy="568" r="4" />
                  <text>
                    <tspan x="939" y="608">
                      MLKit
                    </tspan>
                  </text>
                  <circle cx="925" cy="602" r="4" />
                  <text>
                    <tspan x="1075" y="615">
                      UIKit
                    </tspan>
                  </text>
                  <circle cx="1061" cy="609" r="4" />
                  <text>
                    <tspan x="760" y="698">
                      Mapbox
                    </tspan>
                  </text>
                  <circle cx="746" cy="692" r="4" />
                  <text>
                    <tspan x="1495" y="745">
                      SQLAlchemy
                    </tspan>
                  </text>
                  <circle cx="1481" cy="739" r="4" />
                  <text>
                    <tspan x="286" y="625">
                      Vue.js
                    </tspan>
                  </text>
                  <circle cx="272" cy="619" r="4" />
                  <text>
                    <tspan x="216" y="663">
                      D3.js
                    </tspan>
                  </text>
                  <circle cx="202" cy="657" r="4" />
                  <text>
                    <tspan x="196" y="316">
                      SCSS
                    </tspan>
                  </text>
                  <circle cx="182" cy="310" r="4" />
                  <text>
                    <tspan x="286" y="314">
                      LESS
                    </tspan>
                  </text>
                  <circle cx="272" cy="308" r="4" />
                  <text>
                    <tspan x="189" y="255">
                      Bootstrap
                    </tspan>
                  </text>
                  <circle cx="175" cy="249" r="4" />
                  <text>
                    <tspan x="398" y="605">
                      NodeJS
                    </tspan>
                  </text>
                  <circle cx="384" cy="599" r="4" />
                  <text>
                    <tspan x="308" y="775">
                      NPM
                    </tspan>
                  </text>
                  <circle cx="294" cy="769" r="4" />
                  <text>
                    <tspan x="462" y="776">
                      Yarn
                    </tspan>
                  </text>
                  <circle cx="448" cy="770" r="4" />
                  <text>
                    <tspan x="553" y="723">
                      PIP
                    </tspan>
                  </text>
                  <circle cx="539" cy="717" r="4" />
                  <text>
                    <tspan x="1141" y="761">
                      CocoaPods
                    </tspan>
                  </text>
                  <circle cx="1127" cy="755" r="4" />
                  <text>
                    <tspan x="207" y="716">
                      Electron
                    </tspan>
                  </text>
                  <circle cx="193" cy="710" r="4" />
                  <text>
                    <tspan x="64" y="689">
                      jQuery
                    </tspan>
                  </text>
                  <circle cx="50" cy="683" r="4" />
                  <text>
                    <tspan x="78" y="605">
                      Webpack
                    </tspan>
                  </text>
                  <circle cx="64" cy="599" r="4" />
                  <text>
                    <tspan x="36" y="643">
                      Babel
                    </tspan>
                  </text>
                  <circle cx="22" cy="637" r="4" />
                  <text>
                    <tspan x="47" y="393">
                      SVG
                    </tspan>
                  </text>
                  <circle cx="33" cy="387" r="4" />
                  <text>
                    <tspan x="94" y="540">
                      WebGL
                    </tspan>
                  </text>
                  <circle cx="80" cy="534" r="4" />
                  <text>
                    <tspan x="1385" y="635">
                      Arduino
                    </tspan>
                  </text>
                  <circle cx="1371" cy="629" r="4" />
                  <text>
                    <tspan x="1201" y="635">
                      Raspberry Pi
                    </tspan>
                  </text>
                  <circle cx="1187" cy="629" r="4" />
                  <text>
                    <tspan x="1309" y="698">
                      HomeAssistant
                    </tspan>
                  </text>
                  <circle cx="1295" cy="692" r="4" />
                  <text>
                    <tspan x="1784" y="656">
                      ARKit
                    </tspan>
                  </text>
                  <circle cx="1770" cy="650" r="4" />
                  <text>
                    <tspan x="1740" y="546">
                      C#
                    </tspan>
                  </text>
                  <circle cx="1726" cy="540" r="4" />
                  <text>
                    <tspan x="1838" y="585">
                      Unity
                    </tspan>
                  </text>
                  <circle cx="1824" cy="579" r="4" />
                  <text>
                    <tspan x="1640" y="348">
                      NoSQL
                    </tspan>
                  </text>
                  <circle cx="1626" cy="342" r="4" />
                  <text>
                    <tspan x="1659" y="258">
                      MongoDB
                    </tspan>
                  </text>
                  <circle cx="1645" cy="252" r="4" />
                  <text>
                    <tspan x="1646" y="698">
                      Access
                    </tspan>
                  </text>
                  <circle cx="1632" cy="692" r="4" />
                  <text>
                    <tspan x="1560" y="550">
                      RDBMS
                    </tspan>
                  </text>
                  <circle cx="1546" cy="544" r="4" />
                  <text>
                    <tspan x="1482" y="597">
                      MySQL
                    </tspan>
                  </text>
                  <circle cx="1468" cy="591" r="4" />
                  <text>
                    <tspan x="1608" y="603">
                      PostgreSQL
                    </tspan>
                  </text>
                  <circle cx="1594" cy="597" r="4" />
                  <text>
                    <tspan x="1541" y="664">
                      SQLite
                    </tspan>
                  </text>
                  <circle cx="1527" cy="658" r="4" />
                  <text>
                    <tspan x="1537" y="291">
                      Redis
                    </tspan>
                  </text>
                  <circle cx="1523" cy="285" r="4" />
                  <text>
                    <tspan x="1428" y="248">
                      Memcached
                    </tspan>
                  </text>
                  <circle cx="1414" cy="242" r="4" />
                  <text>
                    <tspan x="914" y="682">
                      MapKit
                    </tspan>
                  </text>
                  <circle cx="900" cy="676" r="4" />
                  <text>
                    <tspan x="1046" y="685">
                      CoreAnimation
                    </tspan>
                  </text>
                  <circle cx="1032" cy="679" r="4" />
                  <text>
                    <tspan x="1093" y="308">
                      CoreData
                    </tspan>
                  </text>
                  <circle cx="1079" cy="302" r="4" />
                  <text>
                    <tspan x="1005" y="776">
                      CloudKit
                    </tspan>
                  </text>
                  <circle cx="991" cy="770" r="4" />
                  <text>
                    <tspan x="476" y="218">
                      Linux
                    </tspan>
                  </text>
                  <circle cx="462" cy="212" r="4" />
                  <text>
                    <tspan x="64" y="280">
                      XML
                    </tspan>
                  </text>
                  <circle cx="50" cy="274" r="4" />
                  <text>
                    <tspan x="68" y="338">
                      GSAP
                    </tspan>
                  </text>
                  <circle cx="54" cy="332" r="4" />
                  <text>
                    <tspan x="1357" y="785">
                      YAML
                    </tspan>
                  </text>
                  <circle cx="1343" cy="779" r="4" />
                  <text>
                    <tspan x="1113" y="242">
                      Git
                    </tspan>
                  </text>
                  <circle cx="1099" cy="236" r="4" />
                  <text>
                    <tspan x="1226" y="292">
                      AppleScript
                    </tspan>
                  </text>
                  <circle cx="1212" cy="286" r="4" />
                  <text>
                    <tspan x="1363" y="177">
                      Microservices
                    </tspan>
                  </text>
                  <circle cx="1349" cy="171" r="4" />
                  <text>
                    <tspan x="1226" y="218">
                      Serverless
                    </tspan>
                  </text>
                  <circle cx="1212" cy="212" r="4" />
                  <text>
                    <tspan x="1323" y="365">
                      Shell Script
                    </tspan>
                  </text>
                  <circle cx="1309" cy="359" r="4" />
                  <text>
                    <tspan x="722" y="796">
                      TopoJSON
                    </tspan>
                  </text>
                  <circle cx="708" cy="790" r="4" />
                  <text>
                    <tspan x="863" y="753">
                      GeoJSON
                    </tspan>
                  </text>
                  <circle cx="849" cy="747" r="4" />
                  <text>
                    <tspan x="637" y="753">
                      JSON
                    </tspan>
                  </text>
                  <circle cx="623" cy="747" r="4" />
                  <text>
                    <tspan x="1711" y="766">
                      Visual Basic
                    </tspan>
                  </text>
                  <circle cx="1697" cy="760" r="4" />
                  <text>
                    <tspan x="51" y="765">
                      WeChat Mini Program
                    </tspan>
                  </text>
                  <circle cx="37" cy="759" r="4" />
                  <text>
                    <tspan x="369" y="666">
                      React
                    </tspan>
                  </text>
                  <circle cx="355" cy="660" r="4" />
                  <text>
                    <tspan x="351" y="723">
                      TypeScript
                    </tspan>
                  </text>
                  <circle cx="337" cy="717" r="4" />
                  <text>
                    <tspan x="388" y="367">
                      Containerization
                    </tspan>
                  </text>
                  <circle cx="374" cy="361" r="4" />
                </g>
              </svg>
            </div>
          </section>

          <section id="design">
            <p id="text-design">
              I enjoy designing things, from furniture to graphics,
              <br />
              websites, visual identities, user experiences, and beyond.
            </p>
            <p id="text-dot-connecting">
              I’m connecting the dots to create cool things,
              <br />
              by combining everything I love.
            </p>
          </section>

          <section id="camarts" className="products">
            <div id="backdrop"></div>
            <div id="text-camarts" className="content">
              <p>
                <img
                  alt=""
                  id="camarts-logo"
                  src="../../assets/images/camarts-logo.png"
                />
              </p>
              <p>
                Camarts, a<span className="a">photography</span> portfolio I’ve
                been
                <span className="b">designing</span> and developing, features
                various apps that are taking full advantage of my{" "}
                <span className="c">programming</span> skills.
              </p>
              <p>
                Most photos were taken while I was
                <span className="d">traveling</span> all over the world, which
                is made possible because I'm an{" "}
                <span className="e">autodidact</span>.
              </p>
              <p>
                It’s the culmination of the
                <span className="f">dot-connecting</span> effort.
              </p>
              <a
                href="../camarts.app/index673a.html?bN"
                target="_blank"
                className="button"
              >
                Take a Look
              </a>
            </div>
            <div className="showcase">
              <div className="container">
                <img
                  alt=""
                  id="camarts-showcase-c"
                  src="../../assets/images/en/camarts-showcase-c.png"
                />
                <img
                  alt=""
                  id="camarts-showcase-b"
                  src="../../assets/images/en/camarts-showcase2.png"
                />
                <img
                  alt=""
                  id="camarts-showcase-a"
                  src="../../assets/images/en/camarts-showcase.png"
                />
              </div>
            </div>
          </section>

          <section id="markly" className="products">
            <div className="content">
              <img
                alt=""
                id="eyeye-logo"
                style={{ height: "40px", marginBottom: "2em" }}
                src="../../assets/images/eyeye-logo.png"
              />
              <p>
                Eyeye is an eyesight trainer powered by AR eye-tracking
                technology.
              </p>
              <a
                href="../apps.apple.com/app/eyeye/id1500873662.html"
                target="_blank"
                rel="external"
              >
                <img
                  alt=""
                  src="../../assets/images/en/download-on-app-store.png"
                  className="app-store-badge"
                />
              </a>
            </div>
            <div className="showcase">
              <img
                alt=""
                id="markly-showcase-a"
                src="../../assets/images/en/eyeye-showcase-a.png"
              />
              <img
                alt=""
                id="markly-showcase-b"
                src="../../assets/images/en/eyeye-showcase-b.png"
              />
            </div>
          </section>

          <section id="vary" className="products">
            <div className="content">
              <img
                alt=""
                id="vary-logo"
                src="../../assets/images/vary-logo.jpg"
              />
              <p>
                Vary is a innovative Modular Journal Editior with built-in
                privacy-focused social network.
              </p>
              <a
                href="../itunes.apple.com/app/vary/id1190496148"
                target="_blank"
                rel="external"
              >
                <img
                  alt=""
                  src="../../assets/images/en/download-on-app-store.png"
                  className="app-store-badge"
                />
              </a>
            </div>
            <div className="showcase">
              <img
                alt=""
                id="vary-showcase-c"
                src="../../assets/images/en/vary-showcase-c.png"
              />
              <img
                alt=""
                id="vary-showcase-b"
                src="../../assets/images/en/vary-showcase-b.png"
              />
              <img
                alt=""
                id="vary-showcase-a"
                src="../../assets/images/en/vary-showcase-a.png"
              />
            </div>
          </section>

          <section id="more">
            <p>
              Here’s everything you need
              <br />
              to know more about me.
            </p>
            <div className="container">
              <div id="social-media" className="item">
                <h2>Social Media</h2>
                <div className="item-content">
                  <a
                    className="tag"
                    target="_blank"
                    rel="external"
                    href="../twitter.com/dandyweng"
                  >
                    Twitter @dandyweng
                  </a>
                  <a
                    className="tag"
                    target="_blank"
                    rel="external"
                    href="../instagram.com/dandyweng"
                  >
                    Instagram @dandyweng
                  </a>
                  <a
                    className="tag"
                    target="_blank"
                    rel="external"
                    href="../github.com/dandyweng.html"
                  >
                    Github @dandyweng
                  </a>
                </div>
              </div>
              <div id="talk" className="item">
                <h2>Talk</h2>
                <div className="item-content">
                  <a
                    href="../www.youtube.com/watch9a19?v=F4BWNANyNhs"
                    target="_blank"
                    rel="external"
                  >
                    <img
                      alt=""
                      src="../../assets/images/en/talk.jpg"
                    />
                  </a>
                  <p>
                    A talk I gave at Tongji University, Shanghai in December
                    2013.
                  </p>
                  <p>
                    Watch on
                    <a
                      href="../www.youtube.com/watch9a19?v=F4BWNANyNhs"
                      target="_blank"
                      rel="external"
                    >
                      YouTube
                    </a>
                    |
                    <a
                      href="../v.youku.com/v_show/id_XNjUyOTM0ODI0.html"
                      target="_blank"
                      rel="external"
                    >
                      Youku
                    </a>
                  </p>
                </div>
              </div>

              <div id="guestbook" className="item">
                <h2>Guestbook</h2>
                <div className="item-content">
                  <div id="new-message">
                    <div id="step-1" className="inner-container">
                      <textarea
                        id="message-content"
                        placeholder="What's on your mind?"
                      ></textarea>
                      <p>
                        If you don't want your message to be displayed publicly,
                        send me an email at
                        <a href="mailto:dandyweng@dandyweng.com">
                          dandyweng@dandyweng.com
                        </a>
                        instead.
                      </p>
                      <button
                        id="next-step-button"
                        className="inactive"
                      >
                        Done
                      </button>
                    </div>
                    <div id="step-2" className="inner-container">
                      <label htmlFor="message-name">Name</label>
                      <input type="text" id="message-name" />
                      <p>Leave the field empty to post anonymously.</p>

                      <label htmlFor="message-email">Email</label>
                      <input
                        type="email"
                        id="message-email"
                        placeholder="john@example.com"
                      />
                      <p>Get reply notifications of this message.</p>

                      <label htmlFor="message-url">URL</label>
                      <input
                        type="url"
                        id="message-url"
                        placeholder="../example.com/index.html"
                      />
                      <p>Your website or social media homepage.</p>

                      <button>Save</button>
                    </div>
                    <div id="step-3" className="inner-container">
                      <h3>Your message has been saved.</h3>
                      <p>
                        All messages are held for moderation before displayed
                        publicly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </header>
      </div>
    );
  }
  componentDidMount() {
    ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
    const globe = new Globe();
    console.log("Go: Hello -> componentDidMount -> globe", globe)
    window.globe = globe;
    globe.init();

    const scene = new Scene();
    window.scene = scene;
    scene.init();
  }
}
