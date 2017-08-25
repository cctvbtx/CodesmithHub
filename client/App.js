import React from 'react';
import ProfilePage from './profile.jsx';
import MainPage from './mainPage.jsx';

const testData = { username: 'David Sally',
  hometown: 'I’m from Benicia, in sunny northern California. I have lived in the bay area for my entire life, and am excited to be living somewhere new. After high school, I moved to Rohnert Park to study Biology at Sonoma State. Post-College, I moved to the East Bay / Tri-Valley area and worked in Biotech for five years.',
  past: 'Before Codesmith, I worked at Bio-Rad in Pleasanton, developing new ways for scientists and doctors to study DNA. I am very proud of the work my team accomplished and the products I helped launch. At Bio-Rad, I first started learning how to program after building massive excel spreadsheets to crunch data sets. I was impressed by how quickly my co-workers could analyze data through python scripts, which inspired me to start taking CS classes at night.',
  future: 'I want to work on products that are useful and make a difference in people’s day-to-day lives. At the risk of sounding cliché, I want to work for companies that are changing the way we interact with the world around us. Specifically, I would like to go into mobile application development and/or work with smart devices (that are actually helpful).',
  hobbies: 'I love Cross-Fit style workouts and love running obstacle course races, like Spartan races and Tough Mudders. I’ve run several half marathons and hope to run a full marathon some day. Recently, I have been learning Swift and iOS development in my free time. Lastly, I love working on my car, although sometimes that’s more of a necessity than a hobby.',
  random: 'I love hiking, especially in Yosemite, and have done some of the best hikes in the valley. I’ve summited half dome under the light of the super moon, and climbed to the peak of cloud’s rest for sunrise. In 2015, I backpacked half of the John Muir trail. This was my first backpacking trip, and was one of the most humbling experiences of my life. I am looking forward to exploring southern California!',
  imgURL: 'http://i.imgur.com/ypzAXKy.jpg',
};

const user = testData;
const pageTypes = ['directory, calendar', 'feed', 'profile'];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      directory: [testData, testData, testData, testData],
      selectedPage: 'directory',
    }
  }

  render() {
    return (
      <div>Dis be da App
        <MainPage
          imgURL={this.state.directory[0].imgURL}
          selectedPage={this.state.selectedPage}
          directory={this.state.directory}
        />
        {/* <ProfilePage
          username={user.username}
          hometown={user.hometown}
          past={user.past}
          future={user.future}
          hobbies={user.hobbies}
          random={user.random}
          imgURL={user.imgURL}
        /> */}
      </div>
    );
  }
}
export default App;
