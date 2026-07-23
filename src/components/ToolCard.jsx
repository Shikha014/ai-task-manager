function ToolCard({ title, children }) {
  return (
    <div className="tool-card">
      <h3>{title}</h3>

      {children}
    </div>
  );
}

export default ToolCard;