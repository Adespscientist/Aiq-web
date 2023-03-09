import {Button} from "../../component/Button";
import {BsArrowDown} from 'react-icons/bs'
import bespoke from '../assets/solution1.gif'
export const color = {
  primary: "#171752",
  secondary: "#8787e7",
  white: "#fff",
  black: "#000",
};

export const font = {};

export const sizes = {
  xxsmall: 8,
  xsmall: 10,
  small: 12,
  xmedium: 16,
  xxmedium: 20,
  medium: 16,
  big: 18,
  xbig: 48,
  xxbig: 64,
};
export const links = {
  item1: [
    {
      id: 1,
      link: "Home",
      url: "/",
    },
    {
      id: 2,
      link: "Who we are",
      url: "who-we-are",
    },
    {
      id: 3,
      link: "What we do",
      url: "what-we-do",
    },
    {
      id: 4,
      link: "Join us",
      url: "join-us",
    },
  ],
  item2: [
    {
      id: 1,
      link: <Button title="Contact us" />,
      url: "join-us",
    },
  ],
};

export const heroData = [
    {
        id: 1,
        header: 'We are Africa first defence and intelligence focused AI company.'
    },
    {
        id: 2,
        header: <Button title="Explort"/>
    },
]
export const contentData = [
  {
    id: 1,
    header: "Aiq is your go to AI company for bespoke and turnkey solutions in the defeence and intelligence industry"
  },
  {
    id: 2,
    img: bespoke
  },
  {
    id:3,
    title: '        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, perspiciatis.',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati laudantium porro veritatis placeat ullam consectetur ipsa, accusamus temporibus officiis enim.'
  },
  {
    id:4,
    button: <Button title="Our Solutions"/>
  },

]