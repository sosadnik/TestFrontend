
export default function LoadingIcon() {

  return (
    <div className="d-flex justify-content-center">
      <div className={`spinner-border m-5 text-blue`} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}