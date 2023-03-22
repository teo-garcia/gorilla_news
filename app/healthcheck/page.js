import { getHealthCheck } from "../../utils/fakeAPI";

const metadata = {
  title: "Gorilla News | Health Check",
};

const HealthCheckPage = async () => {
  const healthCheck = await getHealthCheck();
  const { website } = healthCheck;
  return (
    <section className="healthcheck h-100pc d-flex fd-column jc-center ai-center ta-center">
      <h1>{website.status}</h1>
      <p>{website.message}</p>
    </section>
  );
};

export { metadata };
export default HealthCheckPage;
