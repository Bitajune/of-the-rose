import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <body className="homePage">
        <div className="bioDiv">
          <h1 className="titleOne">About Us</h1>
          <h3 className="mainBio">
            Mental health includes our emotional, psychological, and social
            well-being. It affects how we think, feel, and act. It also helps
            determine how we handle stress, relate to others, and make choices.
            Mental health is important at every stage of life, from childhood
            and adolescence through adulthood. Over the course of your life, if
            you experience mental health problems, your thinking, mood, and
            behavior could be affected. Many factors contribute to mental health
            problems, including:{" "}
            <ul>✿ Biological factors, such as genes or brain chemistry</ul>
            <ul>✿ Life experiences, such as trauma or abuse</ul>
            <ul>✿ Family history of mental health problems</ul>
            <br></br>
            Welcome to <i className="bioTitle">Of The Rose.</i> A place you can
            go when life becomes too much to handle. Here you'll find a safe
            space to look up resources, chat with like-minded individuals,
            create lists to ease anxiety, and post/look-up Meetups. Enjoy your
            stay, you're always welcome.
          </h3>
        </div>

        <div className="homeTwo">
          <h1 className="titleTwo">Chat</h1>
          <h3 className="bioTwo">
            Therapy isn’t cheap and considered a luxury not all can afford.
            Sometimes you just need to let out what you’re feeling in a safe
            space to people who care and can help you through it. Logged in
            users will be able to talk to one another here and get things off of
            their chest. Making counseling accessible, affordable, convenient -
            so anyone who struggles with life’s challenges can get help,
            anytime, anywhere.
          </h3>
          <h3 className="linkTwo">
            <Link exact to={`/chat`}>
              ✿ Learn More
            </Link>
          </h3>
        </div>

        <div className="homeThree">
          <h1 className="titleOne">Find A Therapist</h1>
          <h3 className="bioOne">
            Therapy can help you handle emotions from problems or stressors,
            even if they aren't dramatically life-altering or traumatic. Therapy
            is well-known for its problem-solving techniques and reputation as a
            tool for overcoming anxiety, depression and addiction. Finding a
            therapist can be a daunting task, here you can type in your location
            and find something near you.
          </h3>
          <h3 className="linkOne">
            <Link exact to={`/map`}>
              ✿ Learn More
            </Link>
          </h3>
        </div>

        <div className="homeFour">
          <h1 className="titleTwo">Meet Ups & Pop Ups</h1>
          <h3 className="bioTwo">
            By learning and understanding different cultures you understand why
            people do things the way they do. When you identify with other
            people, you sympathize with their situation. This facilitates
            understanding and prevents misunderstandings. If you're feeling
            alone, you can check in here and find something that just might suit
            you. Here you'll find various meet ups and pop ups that Users are
            hosting. These are great for making new friends, learning new
            cultures, and making new connections.
          </h3>
          <h3 className="linkTwo">
            <Link exact to={`/meet`}>
              ✿ Learn More
            </Link>
          </h3>
        </div>

        <div className="homeFive">
          <h1 className="titleOne">List</h1>
          <h3 className="bioOne">
            One of the ways that lists can relieve stress is by helping you work
            through your anxious feelings. This is because feelings of anxiety
            can lead to stress and rumination when left unchecked, but some of
            the roots of your anxiety can be minimized through a little-focused
            examination. Anxiety comes in many shades, sometimes it helps to
            write down and organize your thoughts. Here is a free to-do list
            where you can keep track of whatever you need.{" "}
          </h3>
          <h3 className="linkOne">
            <Link exact to={`/list`}>
              ✿ Learn More
            </Link>
          </h3>
        </div>

        <div className="homeSix">
          <h1 className="titleTwo">Need Help?</h1>
          <h3 className="bioTwo">
            When it feels like the rest of the world is unreachable, help is out
            there. It may be in the nurturing qualities of a close friend, the
            protection of a trusted adult, a helpline number, or even the
            calming nature of your favorite hobbies. When the rest of the world
            feels like too much to handle, there is always someone or something
            that can help you take control of your thoughts, your actions, and
            your mental health. What you need to remember in times like these,
            is that you are never alone.
          </h3>
          <h3 className="linkTwo">
            <a target="_blank" href="https://suicidepreventionlifeline.org/">
              ✿ Learn More
            </a>
          </h3>
        </div>
      </body>
    </>
  );
}

export default Home;
