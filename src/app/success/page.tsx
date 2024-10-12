import { useRouter } from 'next/router';

const Success = () => {
  const router = useRouter();
  const { session_id } = router.query;

  return (
    <div>
      <h1>Payment Successful</h1>
      <p>Thank you for your subscription!</p>
      <p>Your session ID: {session_id}</p>
    </div>
  );
};

export default Success;