import React from 'react';
import YoutubeEmbed from "./YoutubeEmbed";
import './App.css';

function App() {
  return (
    <div className="App">

      <header>
        <h1>Abraham Family Vacations</h1>
      </header>
      <table width="100%" height="100%" >
        <tr>
          <td>
            <YoutubeEmbed embedId="wWIVUGgBlNM" />
          </td>
          <td>
            <YoutubeEmbed embedId="spxO0S5Kwr4" />
          </td>
          <td>
            <YoutubeEmbed embedId="vbJmyAIk85E" />
          </td>
        </tr>
        <tr>
          <td>
            <YoutubeEmbed embedId="bjQFcoeUGNY" />
          </td>
          <td>
            <YoutubeEmbed embedId="t-8jfxnuA8s" />
          </td>
          <td>
            <YoutubeEmbed embedId="FclsgqHceyM" />
          </td>
        </tr>
      </table>

    </div>
  );
}

export default App;
