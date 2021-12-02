import styles from '../../styles/Logo.module.css';

export function CallOut() {
  const onClickOfCallOut = () => {
    return window.open('https://discord.gg/GYajFNck', '_newtab');
  };

  return (
    <>
      <p className={styles.callOut}>
        Welcome! LKLD.codes [lakeland codes] is an online and in-person
        community for both professional and aspiring software developers in the
        central florida area. We host monthly meetups & lightning talks, provide
        professional networking & collaboration, as well as connect beginners
        with more experienced devs for mentorship and tutoring opportunities.
      </p>
      <button className="btn btn-default" onClick={onClickOfCallOut}>
        Join Us On Discord
      </button>
    </>
  );
}
