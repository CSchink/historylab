import React, { Component } from "react";
import {
  MDBScrollspyBox,
  MDBScrollspyList,
  MDBScrollspyListItem,
  MDBScrollspyText,
  MDBTabContent,
} from "mdbreact";

class ScrollSpyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      sections: [],
    };

    this.scrollSpyText = React.createRef();
  }

  componentDidMount() {
    let sections = this.scrollSpyText.current.getElementsByTagName("h4");
    this.setState({ sections });
  }

  handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const sections = this.state.sections;
    const lastIndex = sections.length - 1;

    for (let i = 0; i < lastIndex; i++) {
      if (
        scrollTop > sections[i].offsetTop - 20 &&
        scrollTop < sections[i + 1].offsetTop - 20
      ) {
        this.setState({ active: i });
      }
    }
    if (scrollTop > sections[lastIndex].offsetTop - 20)
      this.setState({ active: lastIndex });
  };

  render() {
    return (
      <MDBScrollspyBox>
        <MDBScrollspyList color="blue" className="d-flex justify-content-end">
          <MDBScrollspyListItem
            href="#section1"
            active={this.state.active === 0}
          >
            Tags Overview
          </MDBScrollspyListItem>
          <MDBScrollspyListItem
            href="#section2"
            active={this.state.active === 1}
          >
            Theoretical Tags
          </MDBScrollspyListItem>
          <MDBScrollspyListItem
            href="#section3"
            active={this.state.active === 2}
          >
            General Tags
          </MDBScrollspyListItem>
        </MDBScrollspyList>

        <MDBTabContent>
          <MDBScrollspyText
            onScroll={this.handleScroll}
            scrollSpyRef={this.scrollSpyText}
          >
            <h3 id="section1">Overview</h3>
            <br></br>
            <p>
              As you peruse the database you'll notice a tagging system has been
              implemented. There are three categories of tags, each with their
              own specific usefulness.
            </p>
            <p>
              Their usefulness will depend largely on why you're using the
              database. For example, general tags (under the category{" "}
              <strong>Tags</strong>) will be useful for researching current
              events and their connections with distant events.
            </p>
            <p>
              Ponerology tags will be useful for testing Lobaczewski's theory
              contained in his book Political Ponerology, and Cultural tags will
              be useful for developing a theory of human mental and social
              development and their interactions with the theory of Ponerology.
            </p>
            <h3 id="section2">Theoretical Tags</h3>
            <br></br>
            <h4>Cultural</h4>
            <p>
              The cultural tags are meant to help dissect the various cultural
              instincts across history. They are there for the purpose of
              testing and refining a general theory on the various "centers of
              gravity" each given culture may have, as well as ascertaining
              multi-level distinctions between said centers across various
              cultures (per R.G. Collingwood). As such they may or may not prove generally useful for
              the general user.
            </p>
            <p>
              These cultural centers have been identified empirically, and
              consist of:
            </p>
            <ul>
              <li>Inspired:</li>
              <ul>
                <li>Art</li>
                <li>Religion</li>
                <li>History</li>
                <li>Philosophy</li>
              </ul>
              <li>Biological:</li>
              <ul>
                <li>Military</li>
                <li>Political</li>
                <li>Economic</li>
                <li>Social</li>
                <li>Medical</li>
              </ul>
            </ul>
            <p>
              The purpose of these tags is to understand the impact each of
              these centers has on the other, for generating social theory in
              general and making the often complicated work of the social
              machine more understandable for the individual.
            </p>
            <h4>Ponerology</h4>
            <br></br>
            <p>
              These tags are meant to assign the Theory of Political Ponerology
              to the observations of the historian. As Lobaczewski worked with
              the Communist and Nazi forces during the early-to-mid 20th century
              it falls to us to continue to test his theory both today and to
              apply it to history, using the present to repair the past and
              prepare the future.
            </p>

            <h4 id="section3">General Tags</h4>
            <br></br>
            <p>
              These tags act as more of a 'swiss army knife' than the others.
              They contain the names of individuals, like Joe Biden, Donald
              Trump, the Clintons, and other specific traits that can be useful
              in understanding the connections between various events.
            </p>
            <p>
              It is important to mention that these tags are also a work in
              progress. Thus, if a name becomes of interest during the course of
              one's research, it is advisable to tag events for purpose of said
              research. Thus someone like William McKinnley is not tagged in the
              events at this moment. However, the database design makes it
              possible to add such a tag without disrupting the data structure.
            </p>
          </MDBScrollspyText>
        </MDBTabContent>
      </MDBScrollspyBox>
    );
  }
}

export default ScrollSpyPage;
