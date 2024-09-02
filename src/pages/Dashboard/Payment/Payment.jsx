import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("");
function Payment() {
  return (
    <div>
      <SectionTitle heading="Payment" subHeading="Please pay to eat" />
      <div>
        <Elements stripe={stripePromise} />
      </div>
    </div>
  );
}

export default Payment;
