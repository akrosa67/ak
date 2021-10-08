import react from 'react';
import './App.css';

function App() {
  return (
    <div className='Container'>
      <div className='cont-head'>
        
        <div className='logo'>
        <a href=''><img src='https://devpractical.com/public/logo-devpractical-small.png' alt='logo' />
        </a>
       </div>
        <div>
          <ul className='ul-list'>
            <li className='nav-list-items'><a href=''>learn</a></li>
            <li className='nav-list-items'><a href=''>Projects</a></li>
            <li className='nav-list-items'><a href=''>Tools</a></li>
            <li className='nav-list-items'><a href=''>Blog</a></li>
          </ul>
        </div>
    
      </div>
        <main className="main-container">
          <h1 className="title">HTML PROJECTS: Tribute Page</h1>
          <p><img className='img' src="https://devpractical.com/public/2020/html-css-project-tribute-page.png" alt='main img' width='59%' /></p>
          <p>Stats</p>
          <li className='main-list'>Knowledge required: HTML only</li>
          <li className='main-list'>Difficulty: Beginner friendly.</li>
          <li className='main-list'>Estimate project completion time: 2 hours</li> 
          <h2>Skill focus of the project</h2>
          <p>Some of the HTML skills that you will practice while doing this project are:</p>
            <div className='listy'>
            <li className='main-list'>Adding different types of text to a web page. You will be practicing using text types like headings, lists, and links.</li>
            <li className='main-list'>Changing emphasis on text using bold and italics.</li>
            <li className='main-list'>Embedding an image on a web page and adding image captions.</li>
            </div>
          <h2>Main components of tribute page</h2>
          <p>You must include the following parts in your completed project:</p>
          <div className='listy'>
            <li className='main-list'>You must include a title or heading on the tribute page.</li>
            <li className='main-list'>You should include an image on the tribute page.</li>
            <li className='main-list'>You included image must have a caption.</li>
            <li className='main-list'>You should include a timeline of the life of the tribute in the form of a list.</li>
          </div>
          <p>The final project should look like this:</p>
            <img className='img' src='https://devpractical.com/public/tribute-page-screenshot.jpg' alt="" width='59%'/>
            <p>You can read the detailed <a href=''>technical requirements of the tribute page</a> and tests you are required to pass on FreeCodeCamp.</p>
            <h2>Bonus Practice</h2>
            <div className='listy'>
              <li className='main-list'>Create a <a href=''>html Wikipedia page clone.</a></li>
              <li className='main-list'>Create a <a href=''>html only Youtube page clone.</a></li>
              <li className='main-list'>Create a <a href=''> HTML-only Google Search Result page</a></li>
              <li className='main-list'>Create a <a href=''>HTML-only Signup form page</a></li>
            </div>
            <div className='social'>
              <p>Share or support on:</p>
              <a className='social' id='twitbtn'href=''>Twitter</a>
              <a className='social' id='fbbtn'href=''>Facebook</a>
              <a className='social' id='kofbtn'href=''>Ko-Fi</a>
            </div>
        </main>
        
        {/* <sidebar className='sidebar'>
          <h5 className='h5'>Receive new content in your inbox</h5>
          <p>I send out an email when I create something new. Never any spam, easily unsubscribe any time.</p>
          <a href=''><button className='btn'>SUBSCRIBE</button></a>
          <h4 className='h4'>About</h4>
          <p>If you are just starting out you can test the waters by attempting the project-based HTML tutorial for beginners that I made just for you.</p>
          <p>Okay, you got me there, I made it because it was fun and I enjoy helping you on your learning journey as well</p>
          <p>I have created a list of HTML and CSS projects that you can try out.</p>
         </sidebar> */}
         
           <footer className="footer">
                  <h5 className='footnews'>Newsletter</h5>
                  <p>I send out an email when I create something new. Never any spam, easily unsubscribe any time.</p>
                  <div className='btnsub'><a href=''><button className='btn'>SUBSCRIBE</button></a><br/></div>
                  <div className='btnsub'><a href=''><button className='btn'>Buy me a Coffee</button></a></div>
                  <div className='foot_list'>
                      <a href=''>Newsletter</a>
                      <a href=''>Books</a>
                      <a href=''>Projects</a>
                      <a href=''>Tutorial</a>
                      <a href=''>Privacy Policy</a>
                      <a href=''>Resource</a>
                      <a href=''>About us</a>
                  </div>
                  <p>Copyright © 2020 DevPractical. All rights reserved.</p>
           </footer>
         
      
      {/* <div className='container-g'>
        <nav className='nav'>Nav</nav>
        <main className='mainbox'>
          <h1>Main Content</h1>
        </main>
        <sidebar className='sidebar'>
          Side Bar
        </sidebar>
        <footer className='footer'>Footer</footer>
      </div> */}

    </div>
  );
}

export default App;
