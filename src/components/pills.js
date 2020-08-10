import React, { Component } from "react";
import {
  MDBSmoothScroll,
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import YouTubeTutorial from "./youtube";

class Pills extends Component {
  state = {
    items: {
      default: "1",
    },
  };

  togglePills = (type, tab) => (e) => {
    e.preventDefault();
    if (this.state.items[type] !== tab) {
      let items = { ...this.state.items };
      items[type] = tab;
      this.setState({
        items,
      });
    }
  };

  render() {
    return (
      <MDBContainer>
        <MDBNav pills color="primary">
          <MDBNavItem>
            <MDBNavLink
              link
              to="#"
              active={this.state.items["default"] === "1"}
              onClick={this.togglePills("default", "1")}
            >
              About
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              link
              to="#"
              active={this.state.items["default"] === "2"}
              onClick={this.togglePills("default", "2")}
            >
              Tags
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              link
              to="#"
              active={this.state.items["default"] === "3"}
              onClick={this.togglePills("default", "3")}
            >
              Data Entry
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              link
              to="#"
              active={this.state.items["default"] === "4"}
              onClick={this.togglePills("default", "4")}
            >
              Tutorial Video
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent activeItem={this.state.items["default"]}>
          <MDBTabPane tabId="1">
            <p>
              The general aim for SOTT Lab is to create a data storage/data
              science workshop that can serve as a central nervous system for
              SOTT editors and for FOTCM in general, structuring data and making
              it easy to access and share information.
            </p>
            <p>
              History Lab is the main component of SOTT Lab at the moment, but
              Science and Philosophy Labs are on their way.
            </p>
            <p>
              Of course the project is in <strong>Beta</strong> mode so it
              follows that there's lots of room for growth.
            </p>
            <p>
              The purpose of the Historical aspect of this research project has
              been as follows:
            </p>
            <ul>
              <li>Investigate Ponerology</li>
              <li>Build a tool useful for editors seeking to:</li>
              <ul>
                <li>Prepare for radio shows</li>
                <li>
                  Keep track of recent developments and connect them to their
                  antecedents
                </li>
                <li>Write comments and articles</li>
              </ul>
              <li>
                Incorporate data science, especially machine learning, into our
                analysis
              </li>
              <li>
                Organize the deluge of data available on SOTT for SOTT editors
                and, potentially, for posterity.
              </li>
              <li>
                Integrate information from books, research articles, and news
                articles into one area for a 'really big book'
              </li>
            </ul>
          </MDBTabPane>
          <MDBTabPane tabId="2">
            <h3>Overview</h3>
            <br></br>
            <p>
              As you peruse the database you'll notice a tagging system has been
              implemented. There are three categories of tags, each with their
              own specific usefulness and designed to work in conjunction with
              one another. They have been built up out of the necessity of using
              the Law of 3 to categorize and retrieve historical information.
              Thus you have 'Good' (Cultural), Evil (Ponerology), and the
              Specific Situation (General Tags).
            </p>
            <p>
              Their usefulness can also depend on why you're using the database.
              For example, general tags (under the category {''}
              <strong>Tags</strong>) will be useful for researching current
              events and their connections with distant events.
            </p>
            <p>
              Ponerology tags will be useful for testing Lobaczewski's theory
              contained in his book Political Ponerology, and Cultural tags will
              be useful for developing a theory of human mental and social
              development and their interactions with the theory of Ponerology.
            </p>
            <br></br>
            <h3>Cultural Tags</h3>
            <br></br>

            <p>
              The cultural tags are meant to help dissect the various cultural
              instincts across history. They are there for the purpose of
              testing and refining a general theory on the various "centers of
              gravity" each given culture may have, as well as ascertaining
              multi-level distinctions between said centers across various
              cultures.
            </p>
            <p>
              These socio-cultural centers have been derived from the work of GI
              Gurdjieff, and the various centers of gravity of man, as well as
              the work of Robin G. Collingwood, and his exploratino of man's
              higher centers, the Artistic, Religious, Scientific, Historical
              and Philosophical explorations of the Cosmos. They consist of:
            </p>
            <ul>
              <li>Higher:</li>
              <ul>
                <li>Art</li>
                <li>Religion</li>
                <li>Science</li>
                <li>History</li>
                <li>Philosophy</li>
              </ul>
              <li>Lower:</li>
              <ul>
                <li>Military</li>
                <li>Political</li>
                <li>Economic</li>
                <li>Social</li>
                <li>Medical</li>
                <li>Media</li>
                <li>Education</li>
              </ul>
            </ul>
            <p>
              The purpose of these tags is to understand the impact each of
              these centers has on the other, how the ponerization process has
              warped them, and testing Collingwood's theories laid out in works
              like Speculum Mentis and Idea of History.
            </p>
            <br></br>
            <h3>Ponerology</h3>
            <br></br>
            <p>
              These tags are meant to assign the Theory of Political Ponerology
              to the observations of the historian. As Lobaczewski worked with
              the Communist and Nazi forces during the early-to-mid 20th century
              it falls to us to continue to test his theory both today and to
              apply it to history, using the present to repair the past and
              prepare the future.
            </p>
            <br></br>
            <h3>General Tags</h3>
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
          </MDBTabPane>
          <MDBTabPane tabId="3">
            <h3>Data Entry</h3>
            <br></br>
            <p>
              Much of the data entered into the History Lab database is pretty
              straight-forward. However, years of work with the database has
              proven that its data structure and integrity is extremely
              important. Therefore a brief overview of how to enter data is
              required.
            </p>
            <br></br>
            <h4>Date and Century</h4>
            <br></br>
            <p>
              The date and century should always be as close as possible to the
              event that has been described. In some instances the event spans a
              long period of time. In those instances it is recommended to
              assign the date to the end of the period, since that is the time
              in which the event has manifested itself in full.
            </p>
            <p>
              In addition there are many entries that may be a generalization of
              an historical event that has no definite date in time but can be
              assigned one. If it is deemed useful enough to enter into the
              database it can be assigned the general date of June 6th (YYYY).
              This is to ensure that, when perusing the database and one sees a
              general statement, one understands that the date is largely
              unimportant.
            </p>
            <br></br>
            <h4>Entry</h4>
            <br></br>
            <p>
              How to choose what data to enter? This is a difficult question to
              answer but one that grows easier over time. The simple act of
              capturing the data verbatim means that there is no stress about
              whether one wants to input the data or not. One only needs to ask
              - is this something I find interesting enough to keep track of?
              This, of course, depends not only on one's question but the
              importance of the data. It is generally desirable that the entry
              contains some hard fact that can be either confirmed or denied
              through further research.
            </p>
            <br></br>
            <h4>Tags</h4>
            <br></br>
            <p>
              The primary object of interest in every entry is not just the
              entry itself but, much more importantly, how it connects to other
              pieces of data and where a user would expect to see this data.
              This is where the tagging system comes into place.
            </p>
            <p>
              In the <strong>Tags</strong> category one finds a certain hierarchy to the tagging
              system. The general line of force is tagged (for example,
              capitalism), but there are other macro, messo and micro elements
              that can be considered - like employment, unemployment, poor,
              middle class, rich, etc. There are Big Tags, sub-Tags, and sub-sub
              Tags, corresponding to the hierarchical nature of reality.
            </p>

            <p>
              For example, when I select Liberal Fascism I not only want to see
              Black Lives Matter, I want to see Antifa, Nazism, and other
              sub-groups of the same phenomenon.
            </p>

            <p>
              In assigning the tag Victims it is advisable to utilize only the
              one 'sub-Tag' that was responsible for the victimization process.
              For example, one could select both "Victims" and "Liberal Fascism"
              and want to see all the victims of those processes in the past few
              years. But, when one selects "BLM" and "Victims" one only wants to
              see the victims of BLM, not the victims of Antifa, etc.
            </p>
            <p>
              At the current time the Ponerology tags are taken directly from
              the work of Andrzej Lobazcewski. However, as time moves forward it
              is perfectly acceptable, even desirable, to begin incorporating
              modern psychological terminology into the tagging system where it
              fits.
            </p>
            <br></br>
            <h4>Origin and Target</h4>
            <br></br>
            <p>
              The <strong>Origin</strong> is always the country in which the
              phenomenon originated. The <strong>Target</strong> is always the
              country that the event happened to.{" "}
            </p>

            <p>
              For example, say Afghanistan attacked Russia at the behest of
              American interference. Unless the entry specifically states data
              suggesting that the United States was using Afghanistan to attack
              Russia the country of Origin would be Afghanistan and the target
              would be Russia. This is in order to maintain the integrity of
              these categories.
            </p>

            
          </MDBTabPane>
          <MDBTabPane tabId="4">
            <h3>Watch the Tutorial Video Below</h3>
            <br></br>
            <YouTubeTutorial />
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    );
  }
}

export default Pills;
