import "./App.css";

function App() {
  return (
    <>
      <nav>
        <img src="./assets/meta-logo.png" alt="/" />
        <p>Contact Us</p>
      </nav>
      <section id="home">
        <div class="container">
          <div class="intro">
            <div class="info">
              <h2> Welcome to </h2>
              <h1>Meta Unite</h1>
            </div>
            <div class="logometa">
              <img src="./assets/logometa.png" width={100} alt="/" />
            </div>
          </div>
        </div>
        <div class="btn-container">
          <div class="meta-btn">
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              href="https://meta-unite-metavers.s3.ap-south-1.amazonaws.com/application-link/MetaUnite(24.0).zip"
            >
              Windows
            </a>
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              href="https://meta-unite-metavers.s3.ap-south-1.amazonaws.com/application-link/MetaUnite(24.0)MAC.zip"
            >
              Mac
            </a>
            <a>IOS</a>
            <a>Android</a>
          </div>
        </div>
      </section>
      <section id="about">
        <div class="information">
          <h2 class="que">What is a Meta Unite ?</h2>
          <p>
            Metaunite is transforming the way we meet and collaborate in the
            digital world. We are the world's first Metaverse meeting app,
            designed specifically to provide professionals and students with an
            unparalleled personalised experience.
          </p>

          <p>
            Metaunite was founded in 2022 with the mission of making global
            collaboration easy and providing a user-friendly platform for remote
            meetings. Unlike traditional video conferencing platforms, Metaunite
            is designed to offer a unique and tailored experience for each user,
            giving them the ability to customize their Avatars and meeting space
            according to their preferences.
          </p>

          <p>
            {" "}
            Unlike other video conferencing apps, Metaunite allows for a more
            immersive meeting experience. Our app is built to allow users to
            connect with one another through an immersive 3D environment. Our
            AI-powered system powers personalized avatars for each user and
            allows for the integration of virtual objects. This allows users to
            have a more engaging and interactive meeting experience.
          </p>

          <p>
            Metaunite also allows users to access and leverage their social
            network. Our app gives users access to their contacts and allows
            them to easily invite their friends and colleagues to join in on the
            conversation. Additionally, our app offers a variety of
            collaboration tools, such as chat and voice chat, which allow users
            to easily connect with one another and collaborate.
          </p>

          <p>
            At Metaunite, we believe that collaboration should be simple and
            enjoyable. Our mission is to make the world of collaboration more
            accessible to everyone, no matter where they are or who they are
            with. With the help of our innovative technology, we are making
            remote collaboration easier than ever and helping professionals and
            students collaborate more effectively and in a FUN way.
          </p>
        </div>
        <div class="logo-image">
          <img
            style={{ height: "70%", width: "100%" }}
            src="./assets/human.png"
          />
        </div>
      </section>
      {/* <section id="about">
        <div class="information">
          <h2 class="que">What is a Meta Unite ?</h2>
          <p>
            Metaunite is one such digital space that overlays visual elements,
            sound and other sensory input onto real-world setting that enhance
            the user experience by creating a great sense of virtual presence
            especially during the virtual meetings. <br />
            One of the new generation technology : “Metaverse” has been used
            behind the augmentation of this application named Meta unite.{" "}
          </p>
          <h2 class="que">Why should you use ?</h2>
          <p>
            This application will let you socialize, learn, and collaborate in
            ways that go beyond what we can imagine. This application will take
            user experience of virtual meeting to another level.
          </p>
        </div>
        <div class="logo-image">
          <img src="./assets/human.png" alt="/" />
        </div>
      </section> */}
      <section id="key-features">
        <h2 id="que">Key Features</h2>
        <div class="Key-features-container">
          <div class="column">
            <div class="card">
              <span>
                <h3>HD audio and video call</h3>
                <p>
                  This application can stream high quality audio and video call,
                  providing a great picture quality. In case of video buffering
                  due to unstable internet connection, you can always turn off
                  your video and enjoy the hd audio call experience.{" "}
                </p>
              </span>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <span>
                <h3>Meeting room with a 3d view</h3>
                <p>
                  Unlike other applications, Metaunite provides a virtual 3d
                  view of a meeting area. In true sense this application
                  provides an inhouse meeting experience.
                </p>
              </span>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <span>
                <h3>Clarity along with Brand promotion</h3>
                <p>
                  When one think of brand promotion during the virtual meeting,
                  the only option left is background where we can set the logo,
                  and it ultimately leads to inappropriate display of video.
                  This is not the case with Metaunite as it provides different
                  and separate space in a 3d meeting room where banners can be
                  used for brand promotion.
                </p>
              </span>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <span>
                <h3>Chat box</h3>
                <p>
                  This application provides a common chat box where anyone can
                  mention their doubts and queries during the virtual meeting.
                </p>
              </span>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <span>
                <h3>Record meetings</h3>
                <p>
                  With metaunite, one can easily record the entire virtual
                  meeting for future references.
                </p>
              </span>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <span>
                <h3>Sticky notes</h3>
                <p>
                  This is one unique feature with metauntie that allows you to
                  mark the important pointers during the meeting rather than
                  finding pen and paper to do so{" "}
                </p>
              </span>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <span>
                <h3>Raise hand feature</h3>
                <p>
                  This feature allows you to point your suggestion, query or
                  question during the virtual meeting.
                </p>
              </span>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <span>
                <h3>Various 3D animation</h3>
                <p>
                  The application enhances user experience via various 3D
                  animation such as the avatar can wave at every participant,
                  avatar can select his desired seat in the room, avatar can
                  even roam in the room as and when required.
                </p>
              </span>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <span>
                <h3>Option for selecting 3d meetings room</h3>
                <p>
                  This application provides selection option amongst various 3D
                  meeting room environment such as a Skylab, ashram and
                  auditorium.
                </p>
              </span>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <span>
                <h3>Automatic generation of meeting report </h3>
                <p>
                  This is one unique feature with MetaUnite where the meeting
                  report is automatically generated and sent to the admins
                  system upon completing of the virtual meeting
                </p>
              </span>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <span>
                <h3>Virtual Avatars</h3>
                <p>
                  Users can view their friends and colleagues in Virtual avatars
                  on the application. User can even customize their own avatar.
                </p>
              </span>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <span>
                <h3>Screensharing</h3>
                <p>
                  This application comes with a unique screen sharing option
                  where the user can view the screen in their object of their
                  virtual meetings space and the presentation can be maximized
                  upon pressing full screen icon
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="footer">
        {/* <div class="main-footer">
          <div class="logoinfo" data-aos="fade-up">
            <img src="logo2.png" />
          </div>
          <div class="com " data-aos="fade-up">
            <ul>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div> */}

        <footer>
          <div class="footer-bottom">
            <ul>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div class="footer-copyright">
            © Your Copyright 2022 All Rights Reserved
          </div>
        </footer>
      </section>
    </>
  );
}

export default App;

{
  /*
 <nav>
        <img src="./assets/meta-logo.png" alt="/" />
        <p>Contact Us</p>
      </nav>
      <section id="home">
        <div class="container">
          <div class="intro">
            <div class="info">
              <h2> Welcome to </h2>
              <h1>Meta Unite</h1>
            </div>
            <div class="logometa">
              <img src="./assets/logometa.png" width={100} alt="/" />
            </div>
          </div>
        </div>
        <div class="btn-container">
          <div class="meta-btn">
            <div class="mac-btn">
              <button>
                <p> Download for Mac</p>

                <div id="clip">
                  <div id="leftTop" class="corner"></div>
                  <div id="rightBottom" class="corner"></div>
                  <div id="rightTop" class="corner"></div>
                  <div id="leftBottom" class="corner"></div>
                </div>
                <span id="rightArrow" class="arrow"></span>
                <span id="leftArrow" class="arrow"></span>
              </button>
            </div>
            <div class="mac-btn">
              <button>
                <a
                  style={{textDecoration:"none",color: "#fff"}}
                  href="https://meta-unite-metavers.s3.ap-south-1.amazonaws.com/application-link/MetaUnite(24.0).zip"
                >
                  <p> Download for Window </p>
                  <div id="clip">
                    <div id="leftTop" class="corner"></div>
                    <div id="rightBottom" class="corner"></div>
                    <div id="rightTop" class="corner"></div>
                    <div id="leftBottom" class="corner"></div>
                  </div>
                  <span id="rightArrow" class="arrow"></span>
                  <span id="leftArrow" class="arrow"></span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div class="information">
          <h2 class="que">What is a Meta Unite ?</h2>
          <p>
            Metaunite is one such digital space that overlays visual elements,
            sound and other sensory input onto real-world setting that enhance
            the user experience by creating a great sense of virtual presence
            especially during the virtual meetings. <br />
            One of the new generation technology : “Metaverse” has been used
            behind the augmentation of this application named Meta unite.{" "}
          </p>
          <h2 class="que">Why should you use ?</h2>
          <p>
            This application will let you socialize, learn, and collaborate in
            ways that go beyond what we can imagine. This application will take
            user experience of virtual meeting to another level.
          </p>
        </div>
        <div class="logo-image">
          <img src="./assets/human.png" alt="/" />
        </div>
      </section>
      <section id="key-features">
        <h2 id="que">Key Features</h2>
        <div class="Key-features-container">
          <div class="column">
            <div class="card">
              <span>
                <h3>HD audio and video call</h3>
                <p>
                  This application can stream high quality audio and video call,
                  providing a great picture quality. In case of video buffering
                  due to unstable internet connection, you can always turn off
                  your video and enjoy the hd audio call experience.{" "}
                </p>
              </span>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <span>
                <h3>Meeting room with a 3d view</h3>
                <p>
                  Unlike other applications, Metaunite provides a virtual 3d
                  view of a meeting area. In true sense this application
                  provides an inhouse meeting experience.
                </p>
              </span>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <span>
                <h3>Clarity along with Brand promotion</h3>
                <p>
                  When one think of brand promotion during the virtual meeting,
                  the only option left is background where we can set the logo,
                  and it ultimately leads to inappropriate display of video.
                  This is not the case with Metaunite as it provides different
                  and separate space in a 3d meeting room where banners can be
                  used for brand promotion.
                </p>
              </span>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <span>
                <h3>Chat box</h3>
                <p>
                  This application provides a common chat box where anyone can
                  mention their doubts and queries during the virtual meeting.
                </p>
              </span>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <span>
                <h3>Record meetings</h3>
                <p>
                  With metaunite, one can easily record the entire virtual
                  meeting for future references.
                </p>
              </span>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <span>
                <h3>Sticky notes</h3>
                <p>
                  This is one unique feature with metauntie that allows you to
                  mark the important pointers during the meeting rather than
                  finding pen and paper to do so{" "}
                </p>
              </span>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <span>
                <h3>Raise hand feature</h3>
                <p>
                  This feature allows you to point your suggestion, query or
                  question during the virtual meeting.
                </p>
              </span>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <span>
                <h3>Various 3D animation</h3>
                <p>
                  The application enhances user experience via various 3D
                  animation such as the avatar can wave at every participant,
                  avatar can select his desired seat in the room, avatar can
                  even roam in the room as and when required.
                </p>
              </span>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <span>
                <h3>Option for selecting 3d meetings room</h3>
                <p>
                  This application provides selection option amongst various 3D
                  meeting room environment such as a Skylab, ashram and
                  auditorium.
                </p>
              </span>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <span>
                <h3>Automatic generation of meeting report </h3>
                <p>
                  This is one unique feature with MetaUnite where the meeting
                  report is automatically generated and sent to the admins
                  system upon completing of the virtual meeting
                </p>
              </span>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <span>
                <h3>Virtual Avatars</h3>
                <p>
                  Users can view their friends and colleagues in Virtual avatars
                  on the application. User can even customize their own avatar.
                </p>
              </span>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <span>
                <h3>Screensharing</h3>
                <p>
                  This application comes with a unique screen sharing option
                  where the user can view the screen in their object of their
                  virtual meetings space and the presentation can be maximized
                  upon pressing full screen icon
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="footer">
        <footer>
          <div class="footer-bottom">
            <ul>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div class="footer-copyright">
            © Your Copyright 2022 All Rights Reserved
          </div>
        </footer>
      </section>
 */
}
