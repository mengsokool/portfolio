import { Service } from "@/types/service";

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className={`bg-white border rounded-lg p-4`}>
      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
      <p className="text-neutral-600">{service.description}</p>
      <p className="mt-8 font-medium text-green-600">{service.rate}</p>
    </div>
  );
};

export default ServiceCard;
