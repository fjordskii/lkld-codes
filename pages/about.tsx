import styles from '../styles/Layout.module.css';

export default function About() {
  return (
    <section className={styles.maxHeightFlexContainer}>
      <header>
        <h2>About LKLD.codes</h2>
        <p>
          Are you a current or aspiring software developer in the Lakeland or
          Central Florida area? LKLD.codes is a community bringing like minded
          individuals in the software space together to meet, mentor, and
          collaborate.
        </p>
        <h4>Things we do:</h4>
        <ul>
          <li>Monthly Meetups</li>
          <li>Mentorship Pairings</li>
          <li>Public Discord</li>
        </ul>
        <hr />
        <h4>About the founder</h4>
        <p>
          <em>
            Hi! I'm Ford. I was born and raised in Lakeland, FL and recently
            moved back from Nashville, TN. I experienced a really great software
            development community in Nashville that was critical to my growth as
            an engineer.
          </em>
        </p>
        <p>
          <em>
            I was able to meet other like-minded invididuals which instantly
            grew my professional network and scope of what the regional software
            scene was like. What languages and frameworks were local companies
            using the most? Now I knew!
          </em>
        </p>
        <p>
          <em>
            I also got to meet power players at these companies. These sort of
            connections and conversations proved invaluable and led to direct
            hirings not too long after having them (see the power of
            community?).
          </em>
        </p>
        <p>
          <em>
            My favorite part of all though, was helping out newer developers who
            were just getting started and had no idea where to begin. We've all
            been there, and being able to provide mentorship with a supportive,
            like-minded community is invaluable (something I definitely wished I
            had when starting out!).
          </em>
        </p>
        <p>
          <em>
            I hope you're as excited as I am to build this community. I'm
            excited to meet you all!
          </em>
        </p>
      </header>
    </section>
  );
}
