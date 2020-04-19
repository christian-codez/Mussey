import React from 'react';
import HeaderComponent from './components/header/header.component';
import FooterCompoent from './components/footer/footer.component';
import PlayListDisplay from './components/playlist-display/PlayListDisplay';
import ControlArea from './components/control-area/ControlArea';
import PlayListBannerComponent from './components/playlist-banner/PlayListBanner';
const App = () => {
  return (
    <div className='container mussey-app'>
      <HeaderComponent />
      <div class='row'>
        <div class='col'>
          <PlayListBannerComponent />
          <PlayListDisplay />
        </div>
      </div>
      <ControlArea />
      {/* <FooterCompoent /> */}
    </div>
  );
};

export default App;
