function ErrorCard({ message }) {
  return (
    <div className="tool-card error-card">
      <h3>❌ Tool Error</h3>

      <p>{message}</p>
    </div>
  );
}

export default ErrorCard;