import DehazeIcon from '@material-ui/icons/Dehaze';
import ImportContactsSharpIcon from '@material-ui/icons/ImportContactsSharp';
import HeadsetSharpIcon from '@material-ui/icons/HeadsetSharp';
import LibraryBooksSharpIcon from '@material-ui/icons/LibraryBooksSharp';
import MicNoneSharpIcon from '@material-ui/icons/MicNoneSharp';
import MusicNoteSharpIcon from '@material-ui/icons/MusicNoteSharp';
import InsertDriveFileSharpIcon from '@material-ui/icons/InsertDriveFileSharp';
import FormatQuoteSharpIcon from '@material-ui/icons/FormatQuoteSharp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';

function App() {
  return (
    <div className='overall'>
      <div className='header'>
        <div className='icon'>
          <DehazeIcon style={{color: 'white'}}/>
          <img src='https://s-f.scribdassets.com/images/landing/home2_landing/scribd_logo_horiz_small_white.svg?73129b276' />
        </div>
        <div className='signin'>
          <button>Sign In</button>
        </div>
      </div>
      <div className='photo'>
        <h2 className='firsth2'>Endless entertainment</h2>
        <br/>
        <h2 className='secondh2'>and Knowledge</h2>
        <p>Read or listen anytime, anywhere.</p>
        <button>Read free for 30 days</button>
        <p style={{fontSize: '15px', marginTop: '2vh'}}>Only $8.99/month after. Cancel anytime.</p>
      </div>
      <div className='icons'>
        <h2 className='subscription'>All in one simple subsciption</h2>
        <div className='bookicon'>
          <ImportContactsSharpIcon style={{fontSize: '40px', color:'#1e7b85'}} />
          <p>Books</p>
        </div>
        <div className='audiobookicon'>
          <HeadsetSharpIcon style={{fontSize: '40px', color:'#1e7b85'}} />
          <p>Books</p>
        </div>
        <div className='magazine'>
          <LibraryBooksSharpIcon style={{fontSize: '40px', color:'#1e7b85'}} />
          <p>Magazines</p>
        </div>
        <div className='podcast'>
          <MicNoneSharpIcon style={{fontSize: '40px', color:'#1e7b85'}} />
          <p>Podcasts</p>
        </div>
        <div className='music'>
          <MusicNoteSharpIcon style={{fontSize: '40px', color:'#1e7b85'}} />
          <p>Sheet Music</p>
        </div>
        <div className='document'>
          <InsertDriveFileSharpIcon style={{fontSize: '40px', color:'#1e7b85'}} />
          <p>Documents</p>
        </div>
      </div>
      <div className='comment'>
        <FormatQuoteSharpIcon style={{fontSize: '40px', color: '#e9edf7', paddingLeft: '25vw', paddingTop: '10vh'}} />
        <p>Scribd is overall the best and most convenient deal for</p>
        <br/>
        <p>online reading.</p>
        <center>Business Insider</center>
      </div>
      <div className='books'>
        <p>THE BEST BOOKS AND AUDIOBOOKS ARE WAITING FOR YOU</p>
        <img src='https://imgv2-1-f.scribdassets.com/img/word_document/317274694/108x144/ecdde312db/1622139642?v=1' style={{marginLeft: '20vw'}}/>
        <img src='https://imgv2-1-f.scribdassets.com/img/word_document/322011391/108x144/c9c2502015/1621882612?v=1' style={{marginLeft: '0.5vw'}}/>
        <img src='https://imgv2-2-f.scribdassets.com/img/audiobook_square_badge/428512700/144x144/680380e2cf/1622280712?v=1' style={{marginLeft: '0.5vw'}}/>
        <img src='https://imgv2-1-f.scribdassets.com/img/word_document/253264900/108x144/dcda7770b5/1621882635?v=1' style={{marginLeft: '0.5vw'}}/>
        <img src='https://imgv2-2-f.scribdassets.com/img/word_document/317291260/108x144/28b5e7522f/1622140597?v=1' style={{marginLeft: '0.5vw'}}/>
        <img src='https://imgv2-2-f.scribdassets.com/img/word_document/163569726/108x144/ca3544db8d/1622288473?v=1' style={{marginLeft: '0.5vw'}}/>
        <img src='https://imgv2-2-f.scribdassets.com/img/word_document/353163848/108x144/da33dd0b0f/1622142095?v=1' style={{marginLeft: '0.5vw'}}/>
        <br/>
        <img src='https://imgv2-2-f.scribdassets.com/img/word_document/381727754/108x144/8b5570e615/1622144204?v=1' style={{marginLeft: '28.4vw', marginTop: '1vh'}}/>
        <img src='https://imgv2-1-f.scribdassets.com/img/word_document/317291397/108x144/7df6664030/1622127367?v=1' style={{marginLeft: '0.5vw'}}/>
        <img src='https://imgv2-1-f.scribdassets.com/img/audiobook_square_badge/347234674/144x144/09faf607b8/1622183462?v=1' style={{marginLeft: '0.5vw'}}/>
        <img src='https://imgv2-2-f.scribdassets.com/img/word_document/385473254/108x144/c84035df85/1622145108?v=1' style={{marginLeft: '0.5vw'}}/>
        <img src='https://imgv2-2-f.scribdassets.com/img/word_document/341135510/108x144/f2b5187646/1622158676?v=1' style={{marginLeft: '0.5vw'}}/>
        <br/>
        <br/>
        <br/>
        <button>Read free for 30 days</button>
        <p style={{fontSize: '16px', fontWeight: '600', marginTop: '-6vh'}}>Cancel anytime.</p>
      </div>
      <div className='press'>
        <center>IN THE PRESS</center>
        <img src='https://s-f.scribdassets.com/images/landing/index/logo_techcrunch.svg?73129b276' style={{marginLeft: '15vw'}}/>
        <img src='https://s-f.scribdassets.com/images/landing/index/logo_forbes.svg?73129b276' style={{marginLeft: '6vw'}}/>
        <img src='https://s-f.scribdassets.com/images/landing/index/logo_wallstreetjournal.svg?73129b276' style={{marginLeft: '6vw'}}/>
        <img src='https://s-f.scribdassets.com/images/landing/index/logo_los_angeles_times.svg?73129b276' style={{marginLeft: '6vw'}}/>
        <img src='https://s-f.scribdassets.com/images/landing/index/logo_today.svg?73129b276' style={{marginLeft: '6vw'}}/>
      </div>
      <div className='last'>
        <div className='rowone'>
          <p>About</p>
          <p style={{marginLeft: '12vw'}}>Support</p>
          <p style={{marginLeft: '12vw'}}>Legal</p>
          <p style={{marginLeft: '12vw'}}>Social</p>
          <p style={{marginLeft: '22vw'}}>Get our free apps</p>
        </div>
        <div className='rowtwo'>
          <p>About Scribd</p>
          <p style={{marginLeft: '9.5vw'}}>Help/FAQ</p>
          <p style={{marginLeft: '11.8vw'}}>Terms</p>
          <img src='https://e7.pngegg.com/pngimages/340/745/png-clipart-computer-icons-white-instagram-icon-text-logo.png' style={{marginLeft: '12vw', marginTop: '2.6vh', height:'2vh', width:'2vw'}}/>
          <p style={{marginLeft: '1vw'}}>Instagram</p>
          <img src='https://s-f.scribdassets.com/webpack/assets/images/shared/app_store/appstore_white_en.f11cfc14.svg' style={{marginLeft: '18vw', marginTop: '1vh'}}/>
        </div>
        <div className='rowthree'>
          <p>Press</p>
          <p style={{marginLeft: '13vw'}}>Accessibility</p>
          <p style={{marginLeft: '10.8vw'}}>Privacy</p>
          <img src='https://i.pinimg.com/474x/ee/4b/ec/ee4bec98e284c251b885707a470ad3b8.jpg' style={{marginLeft: '11.2vw', marginTop: '2.6vh', height:'3vh', width:'3vw'}}/>
          <p style={{marginLeft: '0.3vw'}}>Twitter</p>
        </div>
        <div className='rowthree'>
          <p>Our Blog</p>
          <p style={{marginLeft: '11.3vw'}}>Purchase Help</p>
          <p style={{marginLeft: '9.8vw'}}>Copyright</p>
          <img src='data:image/png;base64,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' style={{marginLeft: '9.6vw', marginTop: '2.6vh', height:'3vh', width:'3vw'}}/>
          <p style={{marginLeft: '0.6vw'}}>Facebook</p>
          <img src='https://s-f.scribdassets.com/webpack/assets/images/shared/app_store/playstore_en.52ebe950.svg' style={{marginLeft: '18.3vw', width: '120px'}}/>
        </div>
        <div className='rowthree'>
          <p>Join our team!</p>
          <p style={{marginLeft: '8.8vw'}}>AdChoices</p>
          <img src='https://i.pinimg.com/originals/40/e2/6b/40e26beab6a4049d7d52cee459a7dbb8.png' style={{marginLeft: '26.3vw', marginTop: '2.6vh', height:'2vh', width:'2vw'}}/>
          <p style={{marginLeft: '1vw'}}>Pinterest</p>
        </div>
        <div className='rowthree'>
          <p>Contact us</p>
          <p style={{marginLeft: '10.5vw'}}>Publishers</p>
        </div>
        <div className='rowthree'>
          <p>Invite friends</p>
        </div>
        <div className='rowthree'>
          <p>Gifts</p>
        </div>
        <div className='rowthree'>
          <p>Scribd for enterprise</p>
        </div>
        <hr style={{width: '1190px'}}/>
        <div className='rowfour'>
          <p>Books</p>
          <span class='dot'></span>
          <p style={{marginLeft: '1vw'}}>Audiobooks</p>
          <span class='dot'></span>
          <p style={{marginLeft: '1vw'}}>Magazines</p>
          <span class='dot'></span>
          <p style={{marginLeft: '1vw'}}>Podcasts</p>
          <span class='dot'></span>
          <p style={{marginLeft: '1vw'}}>Sheet Music</p>
          <span class='dot'></span>
          <p style={{marginLeft: '1vw'}}>Documents</p>
          <span class='dot'></span>
          <p style={{marginLeft: '1vw'}}>Snapshots</p>
          <span class='dot'></span>
          <p style={{marginLeft: '1vw'}}>Directory</p>
          <p style={{marginLeft: '29.5vw'}}>Copyright</p>
          <p style={{marginLeft: '0.1vw'}}>&#169;</p>
          <p style={{marginLeft: '0.1vw'}}>2021 Scribd Inc.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
