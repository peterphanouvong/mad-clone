import React, { useState, useEffect } from "react";
import HeaderCard from "../HeaderCard";
import gsap from "gsap";

const notes = [
  {
    title: "🔮 Why we're here",
    text: [
      `MAD was born out of our love for creating meaningful products, and our
    disdain for the status quo, the 14hr works days, and all the rest
    we've experienced in our 12 years at digital agencies, product
    companies, and studios.`,
      `We've seen it all — so we found a better way to run a creative business, for us and for everyone we work
    with. Make A Difference.`,
    ],
  },
  {
    title: "✅ Our process",
    text: [
      `
    We steer clear of Venn diagrams and process charts, instead we apply a process that fixes the problem rather
    than following a rigid plan which treats every challenge the same.
  `,
      `Our experience spans the areas of strategy, branding, digital product design, and development. This is
  everything you need to make a successful digital product or service – nothing more. No fluff`,
      `We believe in diverse and interdisciplinary teams that know no boundaries between form and function. This
  allows us to deliver an end-to-end digital product experience. And yes, we’ve done this before. ✌️`,
    ],
  },
  {
    title: "🏓 How we choose clients",
    text: [
      `We say yes to projects that hit the trifecta of positive impact, good budget, and great team. We're
    interested in ideas, organisations, and individuals that are as ambitious about the future as we are, and
    can see the role digital products will play in it. Our best work has only been possible because we're
    careful about who we work with and what we work on. We say No a lot – to clients, and to ideas that impair
    the future we hope to contribute to.`,
      `We're not here to trick more people into using your product more. We don't do marketing projects. We
    discourage pop-ups. We respect privacy laws and believe the connected world we find ourselves in can only be
    made better if we treat the users of digital products with respect. We choose accessibility, diversity, and
    transparency over dark patterns, buzzwords, and gimmicks.`,
    ],
  },
  {
    title: "🏅 Our clients",
    text: [`At least we hide this list behind a list.`],
  },
];

const NotesList = ({ setPage }) => {
  const handleSetPage = (i) => {
    const tl = gsap.timeline();

    tl.to(".flex-container", {
      duration: 0.4,
      x: -400,
      ease: "power4.easeOut",
    });
    setPage(i);
  };

  return (
    <div className="notes-list">
      {notes.map((note, i) => (
        <li onClick={() => handleSetPage(i)} key={i} className="note">
          <h3 className="note-title">{note.title}</h3>
          <p className="note-text">{note.text}</p>
        </li>
      ))}
    </div>
  );
};

const NoteDetails = ({ page, setPage }) => {
  // useEffect(() => {
  //   const tl = gsap.timeline();

  //   tl.from(".note-details", {
  //     duration: 0.4,
  //     x: 400,
  //     ease: "power4.easeOut",
  //   });
  // });

  const handleGoBack = () => {
    console.log("another animation");
    const tl = gsap.timeline();

    tl.to(".flex-container", {
      duration: 0.4,
      x: 0,
      ease: "power4.easeOut",
    });

    setTimeout(() => setPage(-1), 500);
  };

  return page > -1 ? (
    <div className="note-details">
      <div className="all-notes">
        <span onClick={handleGoBack}>{"< All notes"}</span>
      </div>
      <h3>{notes[page].title}</h3>
      <div className="note-text">
        {notes[page].text.map((piece) => (
          <p>{piece}</p>
        ))}
      </div>
    </div>
  ) : (
    <div className="note-details">hello</div>
  );
};

const AllAboutMadCard = () => {
  const [page, setPage] = useState(-1);
  // useEffect(() => {
  //   const tl = gsap.timeline();

  //   tl.from(".main-page", {
  //     duration: 0.4,
  //     x: -400,
  //     ease: "power4.easeOut",
  //   });
  // });

  return (
    <HeaderCard className="all-about-mad-card" header="All About MAD">
      <div className="flex-container">
        <div className="main-page">
          <h2>MAD Notes</h2>
          <NotesList setPage={setPage} />
        </div>

        <NoteDetails page={page} setPage={setPage} />
      </div>
    </HeaderCard>
  );
};

export default AllAboutMadCard;
