const Container = ({ children }) => (
  <div
    style={{
      maxWidth: "990px",
      width: "100%",
      minHeight: "90vh",
      margin: "10px 0",
      backgroundColor: "rgba(230, 230, 230, 0.8)",
      borderRadius: 5,
      padding: 40,
      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    }}
  >
    {children}
  </div>
);

export default Container;
