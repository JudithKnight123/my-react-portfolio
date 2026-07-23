const pages = [
  { name: 'Home', key: 'home' },
  { name: 'About', key: 'about' },
  { name: 'Contact', key: 'contact' },
]

const NavBar = ({ selectedPage, onSetPage }) => {

    const renderPageLinks = () => {
          
      // TODO: What does this function do?
      return pages.map(page => (
         <li
            key={page.key}
            style={{
              ...styles.sidebarLink,
              ...(page.key === selectedPage ? styles.selected : {}),
            }}
            onClick={() => onSetPage(page.key)}
          >
            {page.name}
          </li>
      ));
    }

  return (
    <nav style={styles.navbar}>
        <h1>My Amazing App</h1>
        <ul>
        {renderPageLinks()}
      </ul>
      </nav>
  )


}

// Inline styles for simplicity
const styles = {  
  navbar: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  },
};

export default NavBar