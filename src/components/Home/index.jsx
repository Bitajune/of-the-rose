import React from "react";

function Home({ isLoggedIn }) {
  return (
    <>
      <div className="plantImg">
        <img alt="" src="https://i.imgur.com/EWqFOVp.jpg"></img>
      </div>
      <div className="bioDiv">
        <h1 className="bioTitle">Flowers, Drinks, Community</h1>
        <h3 className="bio">
          Our environment can play a very important role when it comes to our
          mood. Sometimes life gets hard and it becomes difficult to see the
          light in the darkness around us. To feel better, having a positive
          mindset is very necessary, but also the objects and beings that
          surround us are critical too. Welcome to
          <i className="ofTheRose">Of The Rose.</i> A place for people to come
          and find things that make their world a little brighter. Here you can
          search for florists, find bars near you, and look up pop-up events
          that users are hosting.
          <br></br>
          <br></br>
          {isLoggedIn ? (
            <>
              <a href="/bloom">Try it out</a>
            </>
          ) : (
            <>
              <a href="/signup">Sign Up</a>
            </>
          )}
        </h3>
      </div>
    </>
  );
}

export default Home;
