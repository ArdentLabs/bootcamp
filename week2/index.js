import React from 'react';

import {
  Deck, Slide,
  Heading, Text, Code, CodePane,
  Quote, Cite, BlockQuote, Image,
  Layout,

  List,
  ListItem as RadiumListItem,

  Table as RadiumTable,
  TableHeader, TableBody, TableRow,
  TableHeaderItem as RadiumTableHeaderItem,
  TableItem as RadiumTableItem,
} from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';

import { Emoji, HeaderSlide, TitleSlide } from '../components';

const images = {
  sam: require('../assets/sam.jpg'),
};

preloader(images);

const theme = createTheme({
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quartenary: '#CECECE'
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
});

const styles = {
  header: {
    color: '#03A9FC',
    marginBottom: 50,
  },
};

const Presentation = () =>
  <Deck transition={['fade']} theme={theme}>
    <TitleSlide
      title='Week 2: Going Native'
      emoji='iphone'
      subtitle='Learn syntax and make more apps!'
    />
    <HeaderSlide
      title='Good job!'
      subtitle='The hard part is out of the way'
      text={`Now let's solidify your understanding of JavaScript and React`}
    />
  </Deck>;

export default Presentation;
