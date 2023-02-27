import { useParams } from "react-router";

function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>These are our events' details.</h1>
      <p>Event ID: {params.eventId}</p>
    </>
  );
}

export default EventDetailPage;
