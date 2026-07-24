import SpecularButton from './SpecularButton';

const pages = [
  { name: 'Home', key: 'home' },
  { name: 'About', key: 'about' },
  { name: 'Contact', key: 'contact' },
]

const NavBar = ({ selectedPage, onSetPage }) => {

    const renderPageLinks = () => {
          
      // TODO: What does this function do?
      return pages.map(page => (
         <li key={page.key}>
          <SpecularButton onClick={() => onSetPage(page.key)} size="md">
            {page.name}
          </SpecularButton>
          </li>
      ));
    }

  return (
    <nav style={styles.navbar}>
        <h1>Judith Knight Portfolio</h1>
        <ul style={styles.navList}>
        {renderPageLinks()}
      </ul>
      </nav>
  )


}

// Inline styles for simplicity
const styles = {  
  navbar: {
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  },
  navList: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    marginTop:'2rem',
  },
};

export default NavBar