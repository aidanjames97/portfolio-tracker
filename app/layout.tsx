/* eslint-disable @next/next/no-head-element */
import "./layout.css";

function comingSoon() {
  // function for button to alert coming soon
  alert("Coming Soon ...");
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html>
      <body>
        <main>
          <nav className='navbar'>
            <div className="logoContain">
              <img src="logo.gif" alt="logo"></img>
            </div>
            <div className="icons">          
              <img 
                className="iconImg" 
                src="user.svg" 
                alt="user">
              </img>
              <img className="iconImg" src="home.svg" alt="home"></img>
              <img className="iconImg" src="settings-sliders.svg" alt="settings"></img>
              <img className="iconImg" src="usd-circle.svg" alt="usd"></img>
            </div>  
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}