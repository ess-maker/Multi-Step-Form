import assets from "../assets/imges";

interface Step {
  discrption: string;
  path:string
}

interface paln {
  titel: string;
  price: number;
  img: string;
}

interface add {
  titel: string;
  discrption: string;
  price: number;
}
  
  export const steps: Step[] = [
    {
      discrption: "Your info",
      path:"/",
    },
    {
      discrption: "Select plan",
      path:"/plan",
    },
    {
      discrption: "Add-ons",
      path:"/add",
    },
    {
      discrption: "Summary",
      path:"/summery",
    },
  ];

  export const plans:paln[]  = [
    {
      titel:"Arcade",
      price:90,
      img:assets.icon_arcade
    },
    {
      titel:"Advanced",
      price:12,
      img:assets.icon_advanced
    },
    {
      titel:"Pro",
      price:15,
      img:assets.icon_pro
    },
    
  ];


  export const add:add[] = [
    {
      titel:"Online service",
      discrption:"Access to multiplayer games",
      price:1,
    },
    {
      titel:"Larger storage",
      discrption:"Extra 1TB of cloud save",
      price:2,
    },
    {
      titel:"Customizable Profile",
      discrption:"Custom theme on your profile",
      price:2,
    },
    
  ];