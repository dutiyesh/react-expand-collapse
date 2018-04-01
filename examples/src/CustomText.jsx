import React from "react";

import ExpandCollapse from "../../src/ExpandCollapse";

export default function CustomText() {
  const options = {
    previewHeight: "88px",
    expandText: "Read more",
    ellipsisText: "+++"
  };

  return <div className="content__example">
      <h2 className="example__heading">Customize expand button text</h2>
      <div className="content-box">
        <div className="example__card">
          <p className="example-card__title">Movie Info: Memento</p>
          <ExpandCollapse {...options}>
            "A man is determined to find justice after the loss of a loved
            one, even though he is incapable of fully remembering the crime,
            in this offbeat thriller. Leonard (Guy Pearce) is a man who is
            struggling to put his life back together after the brutal rape and
            murder of his wife. But Leonard's problems are different from
            those of most people in his situation; he was beaten severely by
            the same man who killed his wife. The most significant
            manifestation of Leonard's injuries is that his short-term memory
            has been destroyed; he is incapable of retaining any new
            information, and must resort to copious note-taking and Polaroid
            photographs in order to keep track of what happens to him over the
            course of a day (he's even tattooed himself with a few crucial
            bits of information he can't get along without). Leonard retains
            awareness that his wife was brutally murdered, however, and he's
            convinced that the culprit still walks the streets. Leonard is
            obsessed with the notion of taking revenge against the man who has
            ruined his life, and he sets out to find him, getting help from
            Natalie (Carrie-Anne Moss), who appears to be a sympathetic
            barmaid, and Teddy (Joe Pantoliano), who claims to be Leonard's
            friend, even though Leonard senses that he cannot be trusted.
            Writer/director Christopher Nolan adapted Memento from a short
            story by his brother Jonathan Nolan." ~ Mark Deming, Rovi.
          </ExpandCollapse>
        </div>
        <div className="example-code__card">
          <a href="https://github.com/dutiyesh/react-expand-collapse/blob/master/examples/src/CustomText.jsx" title="See full code" className="example-card__title" target="_blank" rel="noopener noreferrer">
            Code
          </a>
          <pre className="example-card__code-block">
            {`
import ExpandCollapse from 'react-expand-collapse';

<ExpandCollapse
  previewHeight="88px"
  expandText="Read more",
  ellipsisText="+++"
>
  "A man is determined to find justice...
</ExpandCollapse>
            `}
          </pre>
        </div>
      </div>
    </div>;
}
