import './topbar.scss'
import { Email, Person } from '@material-ui/icons';
export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " +(menuOpen && "active")}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>Amar</a>
          <div className="itemContainer">
            <Person className='icon'></Person>
            <span>+91 7704824710</span>
          </div> 
          <div className="itemContainer">
            <Email className='icon'></Email>
            <span>amarprince9@gmail.com</span>
          </div> 
        </div>
        
        <div className='right'>
        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
          <span className='line1'></span>
          <span className='line2'></span>
          <span className='line3'></span>
        </div>
        </div>
        
      </div>
    </div>
  )
}
