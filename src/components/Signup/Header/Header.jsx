import headerStyles from "./header.module.scss";
export default function Header() {
  return (
    <header className={headerStyles.header}>
      <h1>Learn to code by watching others</h1>
      <p>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </header>
  );
}
