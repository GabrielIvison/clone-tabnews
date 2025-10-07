import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>O Número</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div style={styles.page}>
        {/* Main Content */}
        <main style={styles.main}>
          <div style={styles.container}>
            <h1 style={styles.title}>O NÚMERO</h1>

            <p style={styles.paragraph}>
              Estamos construindo o mais novo pedacinho da internet para quem é{" "}
              <span style={styles.highlight}>apaixonado por matemática</span> e
              busca um conteúdo sério e verdadeiro. Somos gente de verdade com
              sentimentos de verdade com o único objetivo de fazer a matemática
              ser amada por todos! Que convenhamos ela é{" "}
              <span style={styles.highlightWhite}>a mãe das ciências.</span>
            </p>

            <p style={styles.paragraph}>
              Esse projeto é uma homenagem ao professor{" "}
              <span style={styles.highlightWhite}>Júlio César de Mello</span>{" "}
              <span style={styles.highlight}>(Malba Tahan)</span> e ao canal{" "}
              <span style={styles.highlight}>Toda a Matemática</span> por suas
              contribuições à divulgação do conhecimento matemático pelo país.
            </p>

            <blockquote style={styles.quote}>
              <p style={styles.quoteText}>
                "A minha grande teoria é que, embora o mundo pareça confuso e
                caótico, se o transferirmos para o mundo dos números e formas,
                padrões vão surgir e começamos a entender porque é que as coisas
                são como são."
              </p>
              <cite style={styles.author}>Marcus du Sautoy</cite>
            </blockquote>

            <p style={styles.paragraph}>
              Tudo isso nasceu durante o desenvolvimento de um estudante do{" "}
              <span style={styles.highlight}>curso.dev</span> do{" "}
              <span style={styles.highlightWhite}>Filipe Deschamps</span>
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer style={styles.footer}>
          <div style={styles.footerContent}>
            <p style={styles.footerText}>O NÚM! © 2025 O NÚMERO</p>
            <a
              href="https://github.com/GabrielIvison"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.githubLink}
            >
              <svg
                style={styles.githubIcon}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    fontFamily: "'Poppins', sans-serif",
    margin: 0,
    padding: 0,
    overflow: "hidden",
  },
  main: {
    flex: 1,
    backgroundColor: "#2C3E5F",
    padding: "30px 20px 20px 20px",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  },
  container: {
    maxWidth: "850px",
    margin: "0 auto",
    width: "100%",
  },
  title: {
    fontSize: "3.8rem",
    fontWeight: 900,
    color: "#ffffff",
    marginBottom: "25px",
    letterSpacing: "2px",
    lineHeight: 1,
  },
  paragraph: {
    fontSize: "1.05rem",
    lineHeight: "1.65",
    color: "#ffffff",
    marginBottom: "18px",
    fontWeight: 600,
  },
  highlight: {
    color: "#FDB813",
    fontWeight: 800,
  },
  highlightWhite: {
    fontWeight: 800,
  },
  quote: {
    fontStyle: "italic",
    margin: "20px 0",
    padding: "12px 0",
    borderLeft: "none",
  },
  quoteText: {
    fontSize: "1.05rem",
    lineHeight: "1.65",
    color: "#B8C5D6",
    marginBottom: "8px",
    fontWeight: 600,
  },
  author: {
    display: "block",
    fontSize: "1.05rem",
    color: "#ffffff",
    fontStyle: "normal",
    fontWeight: 700,
  },
  footer: {
    backgroundColor: "#2C3E5F",
    padding: "15px 20px",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  },
  footerContent: {
    maxWidth: "850px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: {
    color: "#ffffff",
    fontSize: "0.85rem",
    margin: 0,
    fontWeight: 600,
  },
  githubLink: {
    color: "#ffffff",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    transition: "color 0.3s, transform 0.3s",
  },
  githubIcon: {
    width: "28px",
    height: "28px",
  },
};
