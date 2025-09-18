import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link href="/logo1.png">
          <Image src="/logo1.png" alt="Logo" width={200} height={80} />
        </Link>
      </div>

      <div className="navbar-links">
        <div className="dropdown">
          <button className="dropbtn"><b>Company ⌄</b></button>
          <div className="dropdown-content">
            <Link href="https://www.virtualinternships.com/companies/">Host an intern</Link>
            <Link href="https://www.virtualinternships.com/#">How it's work</Link>
             <Link href="https://www.virtualinternships.com/companies/faqs">FAQ's</Link>
            

          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn"><b>Educators ⌄</b></button>
          <div className="dropdown-content">
            <Link href="https://www.virtualinternships.com/universities/">University</Link>
            <Link href="https://www.virtualinternships.com/bootcamps">Bootmap</Link>
             <Link href="https://www.virtualinternships.com/governments/">Government</Link>
              <Link href="https://www.virtualinternships.com/affiliates/">Affliates</Link>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn"><b>Interns ⌄</b></button>
          <div className="dropdown-content">
            <Link href="https://www.virtualinternships.com/interns/">Application for internship</Link>
            <Link href="https://www.virtualinternships.com/interns/how-it-works">How it's work</Link>
             <Link href="https://www.virtualinternships.com/interns/career-fields/">Career field</Link>
              <Link href="https://www.virtualinternships.com/interns/experience">experience</Link>
               <Link href="https://www.virtualinternships.com/interns/faqs">FAQ's</Link>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn"><b>Resources ⌄</b></button>
          <div className="dropdown-content">
            <Link href="https://blog.virtualinternships.com/?_gl=1*vdaaee*_gcl_au*MjQ1NDQ4ODgwLjE3NTc1MjExNDA.*_ga*MTc1OTc5NzIyOS4xNzU3NTIxMTQ5*_ga_SFQLTTJMF5*czE3NTgxMDg5ODYkbzYkZzEkdDE3NTgxMTE3ODEkajU1JGwwJGgw">Blog</Link>
           
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn"><b>About Us ⌄</b></button>
          <div className="dropdown-content">
            <Link href="https://www.virtualinternships.com/our-mission/">Our mission</Link>
            <Link href="https://www.virtualinternships.com/our-team/">Our team</Link>
             <Link href="https://www.virtualinternships.com/join-us/">Join us</Link>
              <Link href="https://www.virtualinternships.com/press/">Contact us</Link>
               <Link href="https://www.virtualinternships.com/contact-us/">Press</Link>
          </div>
        </div>
      </div>

      <div className="navbar-login">
          <Link href="/selection">
          <button className="login-button"><b>Login / Signup →</b></button>
        </Link>
      </div>
      
    </nav>
  );
}
