import React from 'react';

const SHOW_GALLERY = false; // ustaw na true, gdy będziesz miał zdjęcia realizacji

function App() {
  return (
    <>
      <Header showGallery={SHOW_GALLERY} />
      <main id="top">
        <Hero />
        <Services />
        {SHOW_GALLERY && <Gallery />}
        <Process />
        <Pricing />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Header({ showGallery }) {
  return (
    <header>
      <div className="container header-inner">
        <a href="#top" className="logo">
          <img src="/images/claryon-logo.png" alt="ClaryonDetailing logo" />
          <div className="logo-text">
            <span>CLARYON</span>
            <span>AUTO&nbsp;DETAILING</span>
          </div>
        </a>
        <nav>
          <a href="#uslugi">Usługi</a>
          {showGallery && <a href="#realizacje">Realizacje</a>}
          <a href="#proces">Proces</a>
          <a href="#cennik">Cennik</a>
          <a href="#onas">O nas</a>
          <a href="#opinie">Opinie</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <div className="header-cta">
          <a href="#kontakt" className="btn btn-primary">
            Umów wizytę
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div>
          <div className="hero-tag">Detailing klasy premium</div>
          <h1 className="hero-title">
            Perfekcja <span className="hero-highlight">lakieru</span>
            <br />
            i wnętrza.
          </h1>
          <p className="hero-text">
            ClaryonDetailing to auto spa dla kierowców, którzy oczekują więcej:
            zaawansowana korekta lakieru, powłoki ochronne oraz kompleksowe
            odświeżenie wnętrza – z dbałością o każdy detal.
          </p>
          <div className="hero-badges">
            <span className="hero-badge">Korekta lakieru</span>
            <span className="hero-badge">Powłoki ceramiczne</span>
            <span className="hero-badge">Detailing wnętrza</span>
          </div>
          <div className="hero-cta-row">
            <a href="#kontakt" className="btn btn-primary">
              Umów wizytę
            </a>
            <a href="tel:+48123456789" className="btn btn-outline">
              Zadzwoń teraz
            </a>
          </div>
          <div className="hero-note">
            Konsultacja telefoniczna i dobór usług dopasowanych do Twojego auta.
          </div>
        </div>

        <div className="hero-car">
          <img
            src="/images/hero-bmw.jpg"
            alt="Samochód po detailingu ClaryonDetailing"
          />
          <div className="hero-logo-overlay">
            <img
              src="/images/claryon-logo-mark.png"
              alt="Claryon logo znak"
            />
            <span>CLARYON&nbsp;AUTO&nbsp;SPA</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="uslugi" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Zakres prac</div>
          <h2 className="section-title">Usługi ClaryonDetailing</h2>
          <p className="section-subtitle">
            Dobieramy zakres prac do realnego stanu lakieru i oczekiwań
            klienta. Każda usługa poprzedzona jest krótką konsultacją i
            oględzinami auta.
          </p>
        </div>

        <div className="services-grid">
          <article className="service-card">
            <div className="service-icon">?</div>
            <h3 className="service-title">Korekta lakieru</h3>
            <p className="service-desc">
              Wieloetapowe polerowanie, które usuwa większość rys
              eksploatacyjnych, hologramów oraz zmatowień, przywracając głębię
              koloru i wysoki połysk.
            </p>
            <div className="service-meta">
              <span>
                Mycie wstępne, dekontaminacja, polerowanie, inspekcja lampą.
              </span>
              <span>
                <strong>od 000&nbsp;zł</strong>
              </span>
            </div>
          </article>

          <article className="service-card">
            <div className="service-icon">?</div>
            <h3 className="service-title">Powłoka ceramiczna</h3>
            <p className="service-desc">
              Ochrona lakieru przed chemią i warunkami atmosferycznymi.
              Zdecydowanie łatwiejsze mycie, głębszy połysk i hydrofobowość na
              wiele miesięcy.
            </p>
            <div className="service-meta">
              <span>
                Aplikacja na przygotowany lakier, pielęgnacja po zabiegu.
              </span>
              <span>
                <strong>od 000&nbsp;zł</strong>
              </span>
            </div>
          </article>

          <article className="service-card">
            <div className="service-icon">?</div>
            <h3 className="service-title">Detailing wnętrza</h3>
            <p className="service-desc">
              Dokładne czyszczenie, odkurzanie, pielęgnacja tworzyw i
              tapicerki. Przywracamy świeżość i porządek bez taniego efektu
              „choinki zapachowej”.
            </p>
            <div className="service-meta">
              <span>
                Kokpit, plastiki, fotele, detale, impregnacja wybranych
                elementów.
              </span>
              <span>
                <strong>od 000&nbsp;zł</strong>
              </span>
            </div>
          </article>

          <article className="service-card">
            <div className="service-icon">?</div>
            <h3 className="service-title">Przygotowanie do sprzedaży</h3>
            <p className="service-desc">
              Kompletne odświeżenie auta z zewnątrz i wewnątrz, aby maksymalnie
              podnieść jego atrakcyjność w ogłoszeniu i na zdjęciach.
            </p>
            <div className="service-meta">
              <span>Pakiet szyty na miarę pod budżet i stan samochodu.</span>
              <span>
                <strong>od 000&nbsp;zł</strong>
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="realizacje" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Portfolio</div>
          <h2 className="section-title">Realizacje</h2>
          <p className="section-subtitle">
            Przed i po – różnica, którą widać w lakierze, reflektorach i
            detalach. Poniżej przykładowe efekty naszych prac.
          </p>
        </div>

        <div className="gallery-grid">
          <figure className="gallery-item">
            <img
              src="/images/realizacja-1.jpg"
              alt="Realizacja detailingu – przykład 1"
            />
            <div className="gallery-label">Przed / Po</div>
          </figure>
          <figure className="gallery-item">
            <img
              src="/images/realizacja-2.jpg"
              alt="Realizacja detailingu – przykład 2"
            />
            <div className="gallery-label">Przed / Po</div>
          </figure>
          <figure className="gallery-item">
            <img
              src="/images/realizacja-3.jpg"
              alt="Realizacja detailingu – przykład 3"
            />
            <div className="gallery-label">Przed / Po</div>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="proces" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Jak działamy</div>
          <h2 className="section-title">Proces współpracy</h2>
          <p className="section-subtitle">
            Od pierwszej rozmowy do odbioru auta – jasno, konkretnie i bez
            zbędnych formalności.
          </p>
        </div>

        <div className="process-steps">
          <article className="process-step">
            <div className="process-number">1</div>
            <div className="process-title">Konsultacja telefoniczna</div>
            <p className="process-text">
              Krótka rozmowa, podczas której poznajemy Twoje oczekiwania, rodzaj
              auta oraz to, w jakich warunkach jest użytkowane.
            </p>
          </article>

          <article className="process-step">
            <div className="process-number">2</div>
            <div className="process-title">Dobór usług</div>
            <p className="process-text">
              Na podstawie stanu lakieru i wnętrza proponujemy konkretny zakres
              prac oraz orientacyjny koszt i czas realizacji.
            </p>
          </article>

          <article className="process-step">
            <div className="process-number">3</div>
            <div className="process-title">Realizacja</div>
            <p className="process-text">
              W umówionym terminie zajmujemy się Twoim autem, krok po kroku
              realizując uzgodniony plan detailingu.
            </p>
          </article>

          <article className="process-step">
            <div className="process-number">4</div>
            <div className="process-title">Odbiór auta</div>
            <p className="process-text">
              Razem oglądamy efekty. Otrzymujesz wskazówki dotyczące mycia i
              pielęgnacji, aby utrzymać efekt jak najdłużej.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="cennik" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Cennik</div>
          <h2 className="section-title">Ceny usług</h2>
          <p className="section-subtitle">
            Poniższe kwoty są orientacyjne i zależą m.in. od wielkości auta
            oraz stanu lakieru i wnętrza. Dokładną wycenę poznasz po krótkiej
            konsultacji.
          </p>
        </div>

        <div className="pricing-table">
          <PricingRow
            name="Mycie detailingowe + dekontaminacja"
            desc="Dokładne mycie nadwozia, felg i nadkoli, usuwanie osadów drogowych, smoły i zanieczyszczeń metalicznych."
          />
          <PricingRow
            name="Korekta lakieru – jednoetapowa"
            desc="Odświeżenie lakieru, redukcja zarysowań i zmatowień, przywrócenie połysku – idealna dla aut w dobrym stanie."
          />
          <PricingRow
            name="Korekta lakieru – wieloetapowa"
            desc="Zaawansowana korekta dla wymagających – większa ilość przejść polerskich i precyzyjna praca na detalach."
          />
          <PricingRow
            name="Powłoka ceramiczna lakieru"
            desc="Aplikacja powłoki ochronnej na odpowiednio przygotowany lakier, w tym pełna dekontaminacja i odtłuszczenie."
          />
          <PricingRow
            name="Detailing wnętrza"
            desc="Kompleksowe czyszczenie, odkurzanie, pielęgnacja tworzyw i tapicerki z uwzględnieniem detali i trudno dostępnych miejsc."
          />
          <PricingRow
            name="Pranie tapicerki materiałowej"
            desc="Pranie foteli, kanapy i wybranych elementów materiałowych, usuwanie plam i odświeżenie wnętrza."
          />
          <PricingRow
            name="Impregnacja tapicerki skórzanej"
            desc="Czyszczenie i zabezpieczenie skór, aby zachowały miękkość, kolor oraz odporność na przetarcia."
          />
        </div>
      </div>
    </section>
  );
}

function PricingRow({ name, desc }) {
  return (
    <div className="pricing-row">
      <div className="pricing-service">
        <span className="pricing-name">{name}</span>
        <span className="pricing-desc">{desc}</span>
      </div>
      <div className="pricing-price">
        <strong>od 000&nbsp;zł</strong>
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="onas" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Kilka słów</div>
          <h2 className="section-title">O ClaryonDetailing</h2>
        </div>

        <div className="about-layout">
          <div>
            <p className="about-text">
              ClaryonDetailing powstał z pasji do motoryzacji i czystych,
              zadbanych samochodów. Każde auto traktujemy indywidualnie –
              niezależnie od tego, czy jest to klasyk, codzienny kompakt czy
              nowe auto z salonu.
            </p>
            <p className="about-text">
              Pracujemy na sprawdzonych produktach i narzędziach, stawiając na
              bezpieczeństwo lakieru oraz trwałość efektu. Nie obiecujemy
              „magii”, tylko solidną, rzemieślniczą pracę i transparentną
              komunikację z klientem.
            </p>

            <div className="about-highlights">
              <div className="about-pill">
                Tylko sprawdzone chemię i powłoki
              </div>
              <div className="about-pill">
                Indywidualne podejście do każdego auta
              </div>
              <div className="about-pill">
                Detailing wykonywany przez pasjonatów
              </div>
            </div>
          </div>

          <div className="about-media">
            Tutaj możesz dodać zdjęcie studia, stanowiska pracy lub kolaż
            efektów „przed i po”.
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="opinie" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Zaufanie</div>
          <h2 className="section-title">Opinie klientów</h2>
        </div>

        <div className="reviews-grid">
          <ReviewCard
            name="Michał"
            car="BMW Serii 3"
            text="Bardzo konkretnie, bez wciskania zbędnych usług. Po korekcie i powłoce lakier wygląda lepiej niż przy odbiorze z salonu."
          />
          <ReviewCard
            name="Kamil"
            car="Audi A4"
            text="Auto przygotowane do sprzedaży – zdjęcia wyszły świetnie, a samochód poszedł praktycznie od razu. Polecam."
          />
          <ReviewCard
            name="Anna"
            car="Volkswagen Golf"
            text="Wnętrze było naprawdę zaniedbane, a po detailingu pachniało jak w nowym aucie. Super kontakt i terminowość."
          />
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ name, car, text }) {
  return (
    <article className="review-card">
      <div className="review-name">{name}</div>
      <div className="review-car">{car}</div>
      <div className="review-stars">?????</div>
      <p>{text}</p>
    </article>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Kontakt</div>
          <h2 className="section-title">Umów wizytę</h2>
          <p className="section-subtitle">
            Napisz lub zadzwoń, a doradzimy najlepszy zakres prac dla Twojego
            auta i umówimy dogodny termin.
          </p>
        </div>

        <div className="contact-layout">
          <div>
            {/* Tu później możesz podpiąć backend / wysyłkę maili */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  'Formularz jest przykładowy. Skonfiguruj obsługę wysyłki (backend, Formspree, itp.).'
                );
              }}
            >
              <div>
                <label htmlFor="name">Imię</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Twoje imię"
                />
              </div>
              <div>
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="adres@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone">Telefon</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+48 ..."
                />
              </div>
              <div>
                <label htmlFor="car">Model auta</label>
                <input
                  id="car"
                  name="car"
                  type="text"
                  placeholder="np. BMW 3 F30, Audi A4 B9"
                />
              </div>
              <div>
                <label htmlFor="message">Zakres prac</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Napisz, czego potrzebuje Twoje auto..."
                />
              </div>
              <div>
                <button type="submit" className="btn btn-primary">
                  Wyślij zapytanie
                </button>
              </div>
            </form>
          </div>

          <aside className="contact-info-block">
            <div className="contact-row">
              <div className="contact-label">Telefon</div>
              <div className="contact-value contact-phone">
                <a href="tel:+48123456789">+48&nbsp;123&nbsp;456&nbsp;789</a>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-label">E-mail</div>
              <div className="contact-value">
                <a href="mailto:kontakt@claryondetailing.pl">
                  kontakt@claryondetailing.pl
                </a>
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-label">Adres</div>
              <div className="contact-value">
                Przykładowa 1
                <br />
                00-000 Miasto
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-label">Godziny pracy</div>
              <div className="contact-value">
                Pon–Pt: 9:00–18:00
                <br />
                Sobota: po wcześniejszym umówieniu
              </div>
            </div>
            <div className="contact-row">
              <div className="contact-label">Social media</div>
              <div className="contact-socials">
                <a href="#" target="_blank" rel="noreferrer">
                  Instagram
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <div>© 2025 ClaryonDetailing. Wszystkie prawa zastrzeżone.</div>
        <div className="footer-links">
          <a href="#">Regulamin</a>
          <a href="#">Polityka prywatności</a>
        </div>
      </div>
    </footer>
  );
}

export default App;
