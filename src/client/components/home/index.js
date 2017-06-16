import React from 'react';
import FullWidthSection from '../layout/components/fullwidth-section.js';
import IconButton from 'material-ui/IconButton';
import { lightWhite, grey900, cyan500, grey200, darkWhite } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import typography from 'material-ui/styles/typography';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import content from './content.md';
import header from './header.md';
import footer from './footer.md';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <FullWidthSection
          style={{
            backgroundColor: cyan500,
            textAlign: 'center',
            overflow: 'hidden'
          }}>
          <div dangerouslySetInnerHTML={{ __html: header }} />
        </FullWidthSection>
        <FullWidthSection
          useContent={true}
          style={{
            backgroundColor: grey200,
            textAlign: 'center'
          }}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </FullWidthSection>
        <FullWidthSection
          style={{
            backgroundColor: grey900,
            textAlign: 'center',
            color: '#fff'
          }}>
          <div dangerouslySetInnerHTML={{ __html: footer }} />
        </FullWidthSection>
      </div>
    );
  }
}

// <div dangerouslySetInnerHTML={{ __html: content }} />
