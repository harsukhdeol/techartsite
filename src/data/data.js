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
        text: "I created a hair model with Maya Xgen, then ran a script to generate a vector field, which I used to animate particles down the length of the hair. I also created a material for ombre hair. ",
      },
      {
        video: "./vfx/5.mp4",
        text: "This is another prototype of animating hair I created with Niagara that also moved with the character. ",
      },
      {
        video: "./vfx/6.mp4",
        text: "This is a VFX matching puzzle I created with C++ and Niagara. Moving the mouse horizontally changes the color and moving it vertically changes its speed.",
      },
    ],
  },
  {
    text: "UX/UI Dev",
    video: "./ui/ui.mp4",
    large: {
      video: "./ui/ui.mp4",
      text: "This is the character customization screen I created with reusable widgets that I developed and animated with UMG. I handled the data and logic with Blueprints. All of the UIs below are protoypes I made with UMG, without any mockups, for the last game studio I worked at.  ",
    },
    small: [
      {
        video: "./ui/4.mp4",
        text: "This is quick tutorial screen I created to describe the objectives of the game. The background was created in Illustrator and the animations were done with UMG timeline. ",
      },
      {
        video: "./ui/5.mp4",
        text: "This UI system displays the all quests available, allows users to select three and displays the progress when it is opened again. I linked the C++ functionality to the UI with Blueprints.",
      },
      {
        video: "./ui/2.mp4",
        text: "This is a working prototype of the Lobby menus. This includes the Leaderboard, Challenges, BattlePass, Wardrobe and Store. ",
      },
      {
        video: "./ui/3.mp4",
        text: "This is the end game screen that displays the player's score and accomplishments. I created UI materials to animate the progress bar and the bottom text. ",
      },
    ],
  },
  {
    text: "AR/VR",
    video: "./arvr/1.mp4",
    large: {
      video: "./arvr/1.mp4",
      text: "I setup this AR scene and experimented with different lighting and post processing setups to design different levels. I also created the VFX particles with Unity's Particle System and used C# to control their movement.",
    },
    small: [
      {
        video: "./arvr/arvr.mov",
        text: "Here is another version of the same scene with different lighting and post processing.",
      },
      {
        video: "./arvr/2.mp4",
        text: "This is the TikTok effect I created for my company to send to TikTok, so they could get approved to use their software commercially. Since I was experienced creating Snapchat filters, I was able to quickly pick up the new software and create this effect independently. ",
      },
      {
        video: "./arvr/3.mp4",
        text: "This is one of the several Snapchat filters I have made. It detects a hand and orbits planets around it. I created the materials for the planets in Lens Studio and used JavaScript to control the motion",
      },
      {
        video: "./arvr/4.mp4",
        text: "I created several trendy filters as well that appeal to the young audience that use Snapchat, This is one of my most popular effects with over 350K views.",
      },
    ],
  },
  {
    text: "Materials",
    video: "./materials/1.mp4",
    large: {
      video: "./materials/1.mp4",
      text: "This is one material instance of my master fractal material. The game had a mathematical theme and required an interesting sky material. So I used HLSL to create a material function that generated fractals and layered them together to remove any harsh lines. ",
    },
    small: [
      {
        video: "./materials/2.mp4",
        text: "This is another material instance of the same fractal material that focused on different parameters of the Julia set.",
      },
      {
        video: "./materials/22.mp4",
        text: "This is the material that was chosen as the final design as it was more subtle and resembled stars.",
      },
      {
        video: "./materials/4.mp4",
        text: "This is the shader I developed for the AR game. It animates the vertices according to the user-defined wind speed and colors the grass blades in a gradient of the user-defined colors",
      },
      {
        video: "./materials/3.mp4",
        text: "I learned about Fractal Brownian Motion and developed this shader in ShaderToy.",
      },
      {
        video: "./materials/5.mp4",
        text: "The game had fractal match puzzles where players could control the shape of the fractal with mouse movement. I created a material that took the numbers generated from the C++ puzzle code and a lookup table to create visually appealing fractals",
      },
      {
        video: "./materials/6.mp4",
        text: "Different types of fractals required adjustments to ensure the color was mapped correctly. I created several lookup tables that could be applied to any type of fractal, creating over 20 different combinations.",
      },
      {
        video: "./materials/7.mp4",
        text: "This is a procedural material I created in Substance Designer. I used the shape and blend nodes to create the basic design and experimented with a variety of noise nodes to create imperfections to add realism. ",
      },
      {
        video: "./materials/8.mp4",
        text: "This is another HLSL shader I created in ShaderToy. I learned about the Mandelbrot Times Table and created a shader that connected different points along a circle to their factors ",
      },
    ],
  },
];

export { menu, pages };
