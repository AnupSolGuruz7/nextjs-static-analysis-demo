import Image from 'next/image';

export default function HomePage() {
  return (
    <main style={styles.container}>
      <section style={styles.card}>
        <header style={styles.header}>
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={120}
            height={24}
            priority
          />
          <h1 style={styles.title}>Static Code Analysis Demo</h1>
          <p style={styles.subtitle}>
            Demonstrating linting, testing, coverage, security scans, and CI/CD
            quality gates in a Next.js project.
          </p>
        </header>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>What This Project Showcases</h2>
          <ul style={styles.list}>
            <li>✔ ESLint, Prettier, and Stylelint enforcement</li>
            <li>✔ Unit testing with coverage thresholds</li>
            <li>✔ SonarQube / SonarCloud quality gates</li>
            <li>✔ Security scanning via npm audit / Snyk</li>
            <li>✔ CI/CD pull request blocking</li>
          </ul>
        </section>

        <footer style={styles.footer}>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Next.js Documentation
          </a>
          <span style={styles.separator}>|</span>
          <a
            href="https://sonarcloud.io"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            SonarCloud
          </a>
        </footer>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f5f7',
    fontFamily: 'system-ui, sans-serif',
  },
  card: {
    maxWidth: 720,
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: '40px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
  },
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: 600,
    marginTop: 16,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    lineHeight: 1.6,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 12,
  },
  list: {
    paddingLeft: 20,
    lineHeight: 1.8,
  },
  footer: {
    marginTop: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    color: '#666',
  },
  link: {
    color: '#0070f3',
    textDecoration: 'none',
    fontWeight: 500,
  },
  separator: {
    margin: '0 8px',
  },
};
