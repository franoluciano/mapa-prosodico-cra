const Layout = ({ children, backgroundImage }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundImage,
      transition: "background-image 5s ease-in-out",
    }}
  >
    {children}
  </div>
);

export default Layout;
