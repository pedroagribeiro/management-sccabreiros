import { useSession } from 'next-auth/react';

const MePage = () => {
  const { data } = useSession();

  return (
    <div style={{ margin: '20px' }}>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h1>API Example</h1>
      <p>The examples below show responses from the example API endpoints.</p>
      <p>
        <em>You must be signed in to see responses.</em>
      </p>
      <h2>Session</h2>
      <p>/api/examples/session</p>
      <iframe src='/api/session' />
      <h2>JSON Web Token</h2>
      <p>/api/examples/jwt</p>
      <iframe src='/api/jwt' />
    </div>
  );
};

MePage.auth = true;

export default MePage;
