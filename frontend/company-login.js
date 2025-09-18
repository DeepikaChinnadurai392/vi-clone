import styles from '../styles/CompanyLogin.module.css';

export default function CompanyLogin() {
  return (
    <div className={styles.container}>
      {/* Logo */}
      <div className={styles.logo}>
        <img src="/logo1.png" alt="Logo" />
      </div>

      {/* Title */}
      <h1 className={styles.title}>Access the company platform</h1>
      <p className={styles.subtitle}>
        Use your work email address to continue. Need an account? <a href="/signup">We’ll help you create one</a>.
      </p>

      {/* Email form */}
      <form method="POST" action="http://localhost:8080/login?option=company">
        <input 
          type="email" 
          name="email" 
          placeholder="Work email address*" 
          required 
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Login</button>
      </form>

      {/* OR */}
      <div className={styles.or}>OR</div>

      {/* Info section */}
      <p className={styles.info}>
        By continuing you are agreeing to Virtual Internships's <a href="#">Terms of Use</a> & <a href="#">Privacy Policy</a>
      </p>

      <div className={styles.extra}>
        <h3>Tap into a global pool of remote interns</h3>
        <p>Find and connect with interns that fit your business needs.</p>
        <strong>Host Company</strong>
      </div>
    </div>
  );
}
