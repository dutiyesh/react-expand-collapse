import React from "react";
import ExpandCollapse from "../src/ExpandCollapse";

describe("<ExpandCollapse />", function() {
  it("handles expand click button", function() {
    const wrapper = mount(
      <ExpandCollapse
        previewHeight="88px"
        expanded={false}
      >
        Visionary filmmaker Christopher Nolan (Memento, The Dark Knight) writes and directs this psychological sci-fi action film about a thief who possesses the power to enter into the dreams of others. Dom Cobb (Leonardo DiCaprio) doesn't steal things, he steals ideas. By projecting himself deep into the subconscious of his targets, he can glean information that even the best computer hackers can't get to. In the world of corporate espionage, Cobb is the ultimate weapon. But even weapons have their weakness, and when Cobb loses everything, he's forced to embark on one final mission in a desperate quest for redemption. This time, Cobb won't be harvesting an idea, but sowing one. Should he and his team of specialists succeed, they will have discovered a new frontier in the art of psychic espionage. They've planned everything to perfection, and they have all the tools to get the job done. Their mission is complicated, however, by the sudden appearance of a malevolent foe that seems to know exactly what they're up to, and precisely how to stop them. ~ Jason Buchanan, Rovi
      </ExpandCollapse>
    )
    expect(wrapper.find('.toggle-content__button').text()).toEqual("... Expand");
    wrapper.find(".toggle-content__button").simulate("click");
    expect(wrapper.find('.toggle-content__button').text()).toEqual("Collapse");
  });
});
