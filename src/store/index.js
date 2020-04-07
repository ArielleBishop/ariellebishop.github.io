import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// {
//   String date         (creation date of the piece in format MM-DD-YYYY)
//   String medium       (medium or programs used to create the piece)
//   String description  (a description of the piece)
//   String previewSource  (image source for PreviewCard)
//   String[] imageSources (image sources to display)
//   String videoSources (videoIds for vimeo plugin)
//   String github       (end of link to github repo/folder)
// }

const illustration = [
  {
    date: "11-15-2019",
    medium: "Photoshop",
    description: "Series of speed paint portraits based on references from /r/RedditGetsDrawn.",
    previewSource: "2019-11-15 Process Portrait Preview.png",
    imageSources: ["2019-11-15 Process Portrait (1).png", "2019-11-15 Process Portrait (2).png", "2019-11-15 Process Portrait (3).png",
      "2019-11-15 Process Portrait (4).png", "2019-11-15 Process Portrait (5).png", "2019-11-15 Process Portrait (6).png",
      "2019-11-15 Process Portrait (7).png", "2019-11-15 Process Portrait (8).png", "2019-11-15 Process Portrait (9).png",
      "2019-11-15 Process Portrait (10).png", "2019-11-15 Process Portrait (11).png", "2019-11-15 Process Portrait (12).png",
      "2019-11-15 Process Portrait (13).png", "2019-11-15 Process Portrait (14).png"],
    videoSources: []
  },
  {
    date: "7-22-2019",
    medium: "Screenprinted Fabric",
    description: "Exploration of tagging and graffiti using publicly sited textiles.",
    previewSource: "2019-07-22 Screenprint Preview.png",
    imageSources: ["2019-07-22 Screenprint (1).jpg", "2019-07-22 Screenprint (2).jpg",
      "2019-07-22 Screenprint (3).jpg", "2019-07-22 Screenprint (4).jpg",
      "2019-07-22 Screenprint (5).jpg", "2019-07-22 Screenprint (6).jpg"],
    videoSources: []
  },
  {
    date: "11-7-2018",
    medium: "Photoshop & AfterEffects",
    description: "An educational video on different culture's 'Halloween-esque' holidays. Made in collaboration with Ryan Nuz & Raveena Jain.",
    previewSource: "2018-11-07 Edutainment Preview.png",
    imageSources: [],
    videoSources: ["354709668"]
  },
  {
    date: "3-20-2018",
    medium: "AfterEffects",
    description: "Lyric video focusing on transforming audio into visual representations.",
    previewSource: "2018-03-20 Lyrics.png",
    imageSources: [],
    videoSources: ["352082622"]
  },
  {
    date: "3-13-2018",
    medium: "Photoshop & Premiere",
    description: "Sci-fi animatic about tense family relations. Made in collaboration with Sophia Cheon.",
    previewSource: "2018-03-13 Animatic Preview.png",
    imageSources: [],
    videoSources: ["352082394"]
  },
  {
    date: "11-20-2017",
    medium: "Illustrator",
    description: "Patterns generated from swatches of a plant drawing.",
    previewSource: "2017-11-20 Patterns Preview.png",
    imageSources: ["2017-11-20 Patterns.png"],
    videoSources: []
  },
  {
    date: "11-2-2017",
    medium: "Photoshop",
    description: "Collage experiment with texture.",
    previewSource: "2017-11-02 Texture Preview.png",
    imageSources: ["2017-11-02 Texture.png"],
    videoSources: []
  },
  {
    date: "10-30-2017",
    medium: "Photoshop",
    description: "Study on different modes of drawing.",
    previewSource: "2017-10-30 Modes Preview.png",
    imageSources: ["2017-10-30 Modes.png"],
    videoSources: []
  },
  {
    date: "10-5-2017",
    medium: "Illustrator",
    description: "Portrait of Ruby Rose.",
    previewSource: "2017-10-05 Ruby Rose Preview.png",
    imageSources: ["2017-10-05 Ruby Rose.png"],
    videoSources: []
  },
  {
    date: "9-25-2017",
    medium: "Illustrator",
    description: "Composition of only squares.",
    previewSource: "2017-09-25 Squares Preview.png",
    imageSources: ["2017-09-25 Squares.png"],
    videoSources: []
  },
  {
    date: "9-21-2017",
    medium: "Illustrator",
    description: "Study on geometric minimalism.",
    previewSource: "2017-09-21 Prints Preview.png",
    imageSources: ["2017-09-21 Prints.png"],
    videoSources: []
  },
  {
    date: "4-14-2016",
    medium: "Photoshop",
    description: "Drawing inspired by Bioware role playing video games.",
    previewSource: "2016-04-14 Tarot Preview.png",
    imageSources: ["2016-04-14 Tarot.jpg"],
    videoSources: []
  },
  {
    date: "3-22-2016",
    medium: "Graphite",
    description: "Portrait of Richard Dawkins.",
    previewSource: "2016-03-22 Dawkins Preview.png",
    imageSources: ["2016-03-22 Dawkins.png"],
    videoSources: []
  }
];
const animation = [
  {
    date: "12-12-2019",
    medium: "Maya",
    description: "Self portrait model.",
    previewSource: "2019-12-12 Self Portrait Preview.png",
    imageSources: ["2019-12-12 Self Portrait (1).gif", "2019-12-12 Self Portrait (2).gif"],
    videoSources: []
  },
  {
    date: "11-5-2019",
    medium: "Maya",
    description: "Digital recreation of a small interior space.",
    previewSource: "2019-11-05 Interior Preview.png",
    imageSources: ["2019-11-05 Interior (1).png", "2019-11-05 Interior (2).png"],
    videoSources: []
  },
  {
    date: "12-14-2018",
    medium: "Maya",
    description: "Talent show act of an animated and rigged character.",
    previewSource: "2018-12-14 Talent Show Preview.png",
    imageSources: [],
    videoSources: ["352084087"]
  },
  {
    date: "3-16-2017",
    medium: "3DS Max",
    description: "Experiment with rain particle generator.",
    previewSource: "2017-03-16 Rain Preview.png",
    imageSources: [],
    videoSources: ["352081875"]
  },
  {
    date: "2-15-2017",
    medium: "3DS Max",
    description: "Experiment with fire particle effect.",
    previewSource: "2017-02-15 Campfire Preview.png",
    imageSources: ["2017-02-15 Campfire.jpg"],
    videoSources: []
  },
  {
    date: "1-13-2017",
    medium: "3DS Max",
    description: "First animation on a rigged character.",
    previewSource: "2017-01-13 Captain Chunk Preview.png",
    imageSources: [],
    videoSources: ["353296008"]
  },
  {
    date: "11-18-2016",
    medium: "3DS Max",
    description: "Character model based on Castle Crashers.",
    previewSource: "2016-11-18 Castle Crasher Preview.png",
    imageSources: [],
    videoSources: ["353296476"]
  },
  {
    date: "10-7-2016",
    medium: "3DS Max",
    description: "Simple lighting & texturing demo.",
    previewSource: "2016-10-07 Lamp Preview.png",
    imageSources: ["2016-10-07 Lamp.jpg"],
    videoSources: []
  }
];
const videography = [
  {
    date: "9-25-2018",
    medium: "Whiteboard & Premiere",
    description: "A variant on the 'chalk talk' style of stop motion. Made in collaboration with Ryan Nuz & Raveena Jain.",
    previewSource: "2018-09-25 Chalk Talk Preview.png",
    imageSources: [],
    videoSources: ["352083851"]
  },
  {
    date: "9-19-2018",
    medium: "Clay & Premiere",
    description: "Claymation conceptualized by visualizing a predetermined cartoon soundtrack.",
    previewSource: "2018-09-19 Claymation Preview.png",
    imageSources: [],
    videoSources: ["352083588"]
  },
  {
    date: "5-23-2018",
    medium: "Premiere",
    description: "Short interview of a Toronto local named James.",
    previewSource: "2018-05-23 Profile Preview.png",
    imageSources: [],
    videoSources: ["353296500"]
  },
  {
    date: "4-23-2018",
    medium: "Premiere",
    description: "An impressionistic recollection of a season of dance.",
    previewSource: "2018-04-23 Sum Preview.png",
    imageSources: [],
    videoSources: ["352082744"]
  },
  {
    date: "2-26-2018",
    medium: "Premiere",
    description: "Short study on performance.",
    previewSource: "2018-02-26 Twister Preview.png",
    imageSources: [],
    videoSources: ["352082020"]
  }
];
const programming = [
  {
    date: "4-7-2020",
    medium: "React.JS",
    description: "Web tool for restaurants to manage their digital presence.",
    previewSource: "2020-04-07 Toastweb Digital Presence Preview.png",
    imageSources: ["2020-04-07 Toastweb Digital Presence.png"],
    videoSources: [],
    github: ""
  },
  {
    date: "3-20-2020",
    medium: "Swift",
    description: "Contributions to the Toast Takeout iOS app, including contactless delivery, curbside pickup, " +
      "confirmation screen order map, & delivery feedback.",
    previewSource: "2020-03-20 Toast Takeout Preview.png",
    imageSources: ["2020-03-20 Toast Takeout (1).png", "2020-03-20 Toast Takeout (2).png",
      "2020-03-20 Toast Takeout (3).png", "2020-03-20 Toast Takeout (4).png", "2020-03-20 Toast Takeout (5).png"],
    videoSources: [],
    github: ""
  },
  {
    date: "1-14-2020",
    medium: "React.JS",
    description: "Web tool for configuring Toast Drop Points.",
    previewSource: "2020-01-14 Outpost Config Admin Preview.png",
    imageSources: ["2020-01-14 Outpost Config Admin (1).png", "2020-01-14 Outpost Config Admin (2).png",
      "2020-01-14 Outpost Config Admin (3).png", "2020-01-14 Outpost Config Admin (4).png"],
    videoSources: [],
    github: ""
  },
  {
    date: "12-4-2019",
    medium: "NativeScript.JS",
    description: "Prototype for a social event planning app. " +
      "Made in collaboration with Shravya Raj, Clara Kim & Sunny Lee.",
    previewSource: "2019-12-14 You In Preview.png",
    imageSources: ["2019-12-14 You In (1).jpg", "2019-12-14 You In (2).jpg", "2019-12-14 You In (3).jpg",
      "2019-12-14 You In (4).jpg", "2019-12-14 You In (5).jpg", "2019-12-14 You In (6).jpg",
      "2019-12-14 You In (7).jpg", "2019-12-14 You In (8).jpg", "2019-12-14 You In (9).jpg"],
    videoSources: [],
    github: "you-in"
  },
  {
    date: "7-29-2019",
    medium: "Processing",
    description: "Using google image search as an input, render images via various shapes.",
    previewSource: "2019-07-29 Simple Image Processing Preview.png",
    imageSources: ["2019-07-29 Simple Image Processing (1).png", "2019-07-29 Simple Image Processing (2).png",
      "2019-07-29 Simple Image Processing (3).png", "2019-07-29 Simple Image Processing (4).png",
      "2019-07-29 Simple Image Processing (5).png", "2019-07-29 Simple Image Processing (6).png"],
    videoSources: [],
    github: "creative-coding/tree/master/OutsideData"
  },
  {
    date: "7-26-2019",
    medium: "Processing",
    description: "Made in processing and then used to control the LED facade on the Ars Electronica Center in Linz, Austria. " +
      "Made in collaboration with Kriti Gurubacharya & Maggie Van Nortwick.",
    previewSource: "2019-07-26 Austauschstadt Preview.png",
    imageSources: ["2019-07-26 Austauschstadt (1).png", "2019-07-26 Austauschstadt (2).png",
      "2019-07-26 Austauschstadt (3).png", "2019-07-26 Austauschstadt (4).png",
      "2019-07-26 Austauschstadt (5).png", "2019-07-26 Austauschstadt (6).png",
      "2019-07-26 Austauschstadt (7).png"],
    videoSources: ["353297101", "355991818"],
    github: "creative-coding/tree/master/FacadePortal"
  },
  {
    date: "7-14-2019",
    medium: "Processing",
    description: "Tessellating hexagons based on Perlin Noise.",
    previewSource: "2019-07-14 Generative Tessellations Preview.png",
    imageSources: ["2019-07-14 Generative Tessellations (1).png", "2019-07-14 Generative Tessellations (2).png",
      "2019-07-14 Generative Tessellations (3).png", "2019-07-14 Generative Tessellations (4).png",
      "2019-07-14 Generative Tessellations (5).png", "2019-07-14 Generative Tessellations (6).png"],
    videoSources: ["353274180"],
    github: "creative-coding/tree/master/GenerativeDesign"
  },
  {
    date: "7-6-2019",
    medium: "Processing",
    description: "Allows users to draw with complex polygons.",
    previewSource: "2019-07-06 Drawing Machine Preview.png",
    imageSources: ["2019-07-06 Drawing Machine (1).png", "2019-07-06 Drawing Machine (2).png",
      "2019-07-06 Drawing Machine (3).png", "2019-07-06 Drawing Machine (4).png",
      "2019-07-06 Drawing Machine (5).png", "2019-07-06 Drawing Machine (6).png",
      "2019-07-06 Drawing Machine (7).png", "2019-07-06 Drawing Machine (8).png",
      "2019-07-06 Drawing Machine (9).png", "2019-07-06 Drawing Machine (10).png",
      "2019-07-06 Drawing Machine (11).png", "2019-07-06 Drawing Machine (12).png",
      "2019-07-06 Drawing Machine (13).png"],
    videoSources: ["356239943"],
    github: "creative-coding/tree/master/DrawingMachine"
  },
  {
    date: "6-28-2019",
    medium: "Java | Vue.JS | PostgreSQL",
    description: "Internal tool designed and implemented during co-op at Chewy for managing their Ship Route data.",
    previewSource: "2019-06-28 Ship Route Manager Preview.png",
    imageSources: ["2019-06-28 Ship Route Manager (1).png", "2019-06-28 Ship Route Manager (2).png",
      "2019-06-28 Ship Route Manager (3).png", "2019-06-28 Ship Route Manager (4).png",
      "2019-06-28 Ship Route Manager (5).png", "2019-06-28 Ship Route Manager (6).png",
      "2019-06-28 Ship Route Manager (7).png", "2019-06-28 Ship Route Manager (8).png",
      "2019-06-28 Ship Route Manager (9).png", "2019-06-28 Ship Route Manager (10).png",
      "2019-06-28 Ship Route Manager (11).png", "2019-06-28 Ship Route Manager (12).png",
      "2019-06-28 Ship Route Manager (13).png", "2019-06-28 Ship Route Manager (14).png",
      "2019-06-28 Ship Route Manager (15).png", "2019-06-28 Ship Route Manager (16).png",
      "2019-06-28 Ship Route Manager (17).png", "2019-06-28 Ship Route Manager (18).png"],
    videoSources: []
  },
  {
    date: "12-13-2018",
    medium: "Java",
    description: "A simplified animation editing interface.",
    previewSource: "2018-12-13 Animator Preview.png",
    imageSources: ["2018-12-13 Animator.png"],
    github: "animator",
    videoSources: []
  },
  {
    date: "6-3-2018",
    medium: "Unity",
    description: "Virtual Reality game which uses gaze direction to solve basic puzzles.",
    previewSource: "2018-06-03 Find Drake Preview.png",
    imageSources: ["2018-06-03 Find Drake.png"],
    videoSources: []
  },
  {
    date: "3-27-2018",
    medium: "Java",
    description: "A recreation of the Microsoft classic Minesweeper",
    previewSource: "2018-03-27 Minesweeper Preview.png",
    imageSources: ["2018-03-27 Minesweeper.png"],
    videoSources: []
  }
];

export default new Vuex.Store({
  state: {
    illustration: illustration,
    animation: animation,
    videography: videography,
    programming: programming
  },
  getters: {
    illustration: state => state.illustration,
    animation: state => state.animation,
    videography: state => state.videography,
    programming: state => state.programming
  }
});
