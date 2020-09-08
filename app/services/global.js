import Service from '@ember/service';
import {tracked} from "@glimmer/tracking";


export default class GlobalService extends Service {
  @tracked headline = "";
  @tracked text = "";
  @tracked dynamicID;
  @tracked currentHeadline = this.posts[this.dynamicID].headline;
  @tracked currentText = this.posts[this.dynamicID].text;
  @tracked currentDate = this.posts[this.dynamicID].date;

  @tracked posts = [
    {
      id: 1,
      date: '07/30/2020',
      headline: 'What is Ember JS ?',
      text: 'Ember.js is an open-source JavaScript web framework, based on the model–view–viewmodel pattern. It allows developers to create scalable single-page web applications by incorporating common idioms and best practices into the framework.'
    },
    {
      id: 2,
      date: '08/03/2020',
      headline: 'What is Ember CLI ?',
      text: 'The Ember CLI (command line interface) is the official way to create, build, test, and serve the files that make up an Ember app or addon. Many things have to happen before a web app is ready for the browser. Ember CLI helps you get there with zero configuration.'
    },
    {
      id: 3,
      date: '08/07/2020',
      headline: 'How does Ember JS work ?',
      text: 'In its simplest form, an Ember app uses the routing layer to resolve, based on the URL, a particular model which is then handed over to a controller/template (which in turn can call components) for display and interaction. A service may be used to retrieve models, for example.'
    },
    {
      id: 4,
      date: '08/30/2020',
      headline: 'Who uses Ember JS ?',
      text: '490 companies reportedly use Ember. js in their tech stacks, including Twitch, LinkedIn, and Accenture.'
    },
    {
      id: 5,
      date: '08/21/2020',
      headline: 'Why is ember not popular ?',
      text: 'Ember was never popular to begin with. ... Ember wasnt popular because there was no big company behind it, no hype, no developer advocates or other devrel people cheering and bringing people in.'
    },
  ];

  getPostById(id) {
    const postId = parseInt(id);
    return this.posts.find(post => post.id === postId);
  }
}
