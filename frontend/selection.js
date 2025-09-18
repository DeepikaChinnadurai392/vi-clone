import { useRouter } from 'next/router';
import styles from '../styles/Selection.module.css'; // we'll create this CSS file

export default function Selection() {
  const router = useRouter();

  const handleSelect = (option) => {
    // You can send the user to login page with extra info if needed
    router.push({
      pathname: '/login',
      query: { option: option }
    });
  };

  return (
    <div className={styles.container}>
      <h1>The #1 Platform for  <strong style={{ color: '#008B8B' }}> Guaranteed </strong><br /> Remote Internships</h1>
      <h3>What are you looking for?</h3>

      <div className={styles.options}>
        <div className={styles.option} onClick={() => handleSelect('internship')}>
          <img src="/loginlogo.png" alt="Looking for internship" />
          <p>I'm looking for an internship</p>
        </div>

        <div className={styles.option} onClick={() => handleSelect('company')}>
          <img src="/loginlogo1.png" alt="Looking for intern" />
          <p>I'm looking for an intern for my company</p>
        </div>
      </div>

      <div className={styles.circularImages}>
        <img src="/circle1.png" alt="Circle 1" />
        <img src="/circle2.png" alt="Circle 2" />
        <img src="/circle3.png" alt="Circle 3" />
        <img src="/circle4.png" alt="Circle 4" />
        <img src="/circle5.png" alt="Circle 5" />
        <img src="/circle6.png" alt="Circle 6" />

      </div>
    </div>
  );
}
