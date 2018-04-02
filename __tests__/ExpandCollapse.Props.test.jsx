import React from "react";
import ExpandCollapse from "../src/ExpandCollapse";

describe("<ExpandCollapse /> Props", function() {
  it("matches the custom class", function() {
    const customClassName = "movie-info";

    const wrapper = render(
      <ExpandCollapse
        previewHeight="88px"
        className="movie-overview"
      >
        Visionary filmmaker Christopher Nolan (Memento, The Dark Knight) writes and directs this psychological sci-fi action film about a thief who possesses the power to enter into the dreams of others.
      </ExpandCollapse>
    )
    expect(wrapper
      .prop("class"))
      .toMatch(/(movie-overview)+/);
  })

  it("matches the expanded state", function() {
    const customClassName = "movie-info";

    const wrapper = render(
      <ExpandCollapse
        previewHeight="88px"
        expanded={true}
        collapseText="Collapse"
      >
        Visionary filmmaker Christopher Nolan (Memento, The Dark Knight) writes and directs this psychological sci-fi action film about a thief who possesses the power to enter into the dreams of others.
      </ExpandCollapse>
    )
    expect(wrapper
      .prop("class"))
      .toMatch(/(react-expand-collapse--expanded)+/);
    expect(wrapper
      .find(".react-expand-collapse__button")
      .text()).toEqual("Collapse");
  })

  it("matches expandText with ellipsis", function() {
    const wrapper = mount(
      <ExpandCollapse
        previewHeight="88px"
        expandText="Expand"
        ellipsis={true}
      >
        Visionary filmmaker Christopher Nolan (Memento, The Dark Knight) writes and directs this psychological sci-fi action film about a thief who possesses the power to enter into the dreams of others.
      </ExpandCollapse>
    );
    expect(wrapper
      .find(".react-expand-collapse__button")
      .text()).toEqual("... Expand");
  });

  it("matches expandText without ellipsis", function() {
    const wrapper = mount(
      <ExpandCollapse
        previewHeight="88px"
        expandText="Expand"
        ellipsis={false}
      >
        Visionary filmmaker Christopher Nolan (Memento, The Dark Knight) writes and directs this psychological sci-fi action film about a thief who possesses the power to enter into the dreams of others.
      </ExpandCollapse>
    );
    expect(wrapper
      .find(".react-expand-collapse__button")
      .text()).toEqual("Expand");
  });
});
