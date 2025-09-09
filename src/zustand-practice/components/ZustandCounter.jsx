import styles from './ZustandCounter.module.scss';

const ZustandCounter = () => {

  return (
    <main className={styles.counter}>
      <h1>Zustand Counter</h1>
      <div className={styles.value}>0</div>
      <div
        style={{
          display: 'flex',
          gap: 8,
          justifyContent: 'center',
          marginBottom: 8,
        }}>
        <button>Increment</button>
        <button>Decrement</button>
        <button>×3</button>
      </div>
      <button>Toggle Counter</button>
    </main>
  );
};

export default ZustandCounter;
