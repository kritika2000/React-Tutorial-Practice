/*
function MainContent() {
  return <h2>I'm learning React</h2>;
}

const h1 = document.createElement("h1");
h1.textContent = "Hello world";
h1.className = "header";
console.log(h1);

const navbar = (
  <nav>
    <h1>Kritika's Bistro</h1>
    <ul></ul>
  </nav>
);

function Header() {
  return (
    <header>
      <nav>
        <img src="./react-logo.png" />
        <ul className="nav--items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Main() {
  return (
    <main>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was release in 2013</li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 20xx Kritika development. All rights reserved</p>
    </footer>
  );
}

const FunFacts = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

ReactDOM.render(<FunFacts />, document.getElementById("root"));
*/

function Header() {
  return (
    <header>
      <nav className="navbar">
        <img className="img--logo" src="./react-logo.png" />
        <h2 className="heading">ReactFacts</h2>
        <p className="content">React Course - Project 1</p>
      </nav>
    </header>
  );
}

function Main() {
  return (
    <main className="main">
      <h1 className="main--title">Fun facts about React</h1>
      <ul className="main--list">
        <li>
          <span></span>
          <p>Was first released in 2013</p>
        </li>
        <li>
          <span></span>
          <p>Was originally created by Jordan Walke</p>
        </li>
        <li>
          <span></span>
          <p>Has ell over 100K start on Github</p>
        </li>
        <li>
          <span></span>
          <p>Is maintained by Facebook</p>
        </li>
        <li>
          <span></span>
          <p>Power thousands of enterprise apps, including mobile apps.</p>
        </li>
      </ul>
    </main>
  );
}

function FunFacts() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

ReactDOM.render(<FunFacts />, document.getElementById("root"));
