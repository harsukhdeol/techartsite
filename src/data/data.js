let menu = [
  {
    text: "VFX",
    image: "./vfx/vfx.jpg",
  },
  {
    text: "UX/UI Dev",
    image: "./ui/ui.png",
  },
  {
    text: "AR/VR",
    image: "./arvr/1.png",
  },
  {
    text: "Materials",
    image: "./materials/materials.png",
  },
];
let pages = [
  {
    text: "VFX",
    video: "./vfx/vfx.mp4",
    large: {
      video: "./vfx/vfx.mp4",
      text: "This effect is made up of two particle systems moving along a spline and a dissolve material that animates upwards. A custom Niagara module script was implemented to make the particles follow the curve. All of the VFX below were created at my last workplace with Unreal Engine's particle system, Niagara. ",
    },
    small: [
      {
        video: "./vfx/2.mp4",
        text: "I created a Niagara module script that read the vertex data of a box and skeletal mesh and transformed the particle position from the surface of the box to the character. I made this script work with the default physics modules so additional forces, like curl noise, could be added.",
      },
      {
        video: "./vfx/3.mp4",
        text: "I created the placement VFX for this power pole. There is one emiter on the sphere and one on the pole, that resizes to fit the shape of its parent.",
      },
      {
        video: "./vfx/4.mp4",
        text: "I created the hair model with Maya Xgen, then ran a script to generate a vector field. I used the vector field to animate particles down the length ot the hair and created a material for ombre hair. ",
      },
      {
        video: "./vfx/5.mp4",
        text: "This is another prototype of animating hair with Niagara that moved with the character. ",
      },
      {
        video: "./vfx/6.mp4",
        text: "This is a Niagara match puzzle I created with C++. Moving the mouse horizontally changes the color and moving it vertically changes its speed.",
      },
    ],
  },
  {
    text: "UX/UI Dev",
    video: "./ui/ui.mp4",
    large: {
      video: "./ui/ui.mp4",
      text: "This is the character customization screen I created for work. This UI is made up of reusable widgets that I developed and animated with UMG. I handled the data and logic with Blueprints. All of the UI screens below are protoypes I made from scratch, without any mockups, for the last game studio I worked at.  ",
    },
    small: [
      {
        video: "./ui/4.mp4",
        text: "This is quick tutorial screen that opens at the start of the game.   ",
      },
      {
        video: "./ui/5.mp4",
        text: "This is a more commplex UI system that displays the quests avaliable, allows users to select three and displays the progress when it is opened again. I linked the C++ functionality with Blueprints by exposing functions and variables to Blueprints and extending them in BLueprints with the correct references",
      },
      {
        video: "./ui/2.mp4",
        text: "This is a working prototype of the Lobby menus. This includes the Leaderboard, Challenges, BattlePass, Wardrobe ans Store. ",
      },
      {
        video: "./ui/3.mp4",
        text: "This is the end game screen that gets the player's score and accomplishments and displays it on the screen. I created UI materials to animate the progress bar and the bottom text. ",
      },
    ],
  },
  {
    text: "AR/VR",
    video: "./arvr/1.mp4",
    large: {
      video: "./arvr/1.mp4",
      text: "Niagra particle effects with unreal",
    },
    small: [
      {
        video: "./arvr/arvr.mp4",
        text: "Niagra particle effects with unreal",
      },
      {
        video: "./arvr/2.mp4",
        text: "Niagra particle effects with unreal",
      },
      {
        video: "./arvr/3.mp4",
        text: "Niagra particle effects with unreal",
      },
      {
        video: "./arvr/4.mp4",
        text: "Niagra particle effects with unreal",
      },
    ],
  },
  {
    text: "Materials",
    video: "./materials/1.mp4",
    large: {
      video: "./materials/1.mp4",
      text: "Niagra particle effects with unreal",
    },
    small: [
      {
        video: "./materials/2.mp4",
        text: "Niagra particle effects with unreal",
      },

      {
        video: "./materials/3.mp4",
        text: "Niagra particle effects with unreal",
      },
      {
        video: "./materials/4.mp4",
        text: "Niagra particle effects with unreal",
      },
      {
        video: "./materials/5.mp4",
        text: "Niagra particle effects with unreal",
      },
      {
        video: "./materials/6.mp4",
        text: "Niagra particle effects with unreal",
      },
      {
        video: "./materials/7.mp4",
        text: "Niagra particle effects with unreal",
      },
      {
        video: "./materials/8.mp4",
        text: "Niagra particle effects with unreal",
      },
    ],
  },
];

export { menu, pages };
