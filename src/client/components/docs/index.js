import React from 'react';
import content from './content.md';

export default class Docs extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  }
}
