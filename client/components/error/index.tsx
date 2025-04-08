type ErrorProps = {
  error: Error;
};

function Error({ error }: ErrorProps) {
  return (
    <div>
      <p>{`Error: ${error.message}`}</p>
    </div>
  );
}

export default Error;
