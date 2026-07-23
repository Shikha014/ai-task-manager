function RetryButton({ onRetry }) {
  return (
    <button
      onClick={onRetry}
      className="retry-btn"
    >
      🔄 Retry
    </button>
  );
}

export default RetryButton;