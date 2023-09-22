import FramerMotion from "@/components/FramerMotion";

const Services = () => {
  return (
    <FramerMotion>
      <div class="container mx-auto mt-8 p-4">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold">Design</h2>
          <p class="mt-4">
            Simplifi Networks can assist with or lead on wireless and network
            design requirements. This can range from Point-To-Point links to
            large Point-To-Multi-Point networks, network topology for hotels,
            offices, and gated communities.
          </p>
          <p class="mt-4">
            We have worked with partners to create innovative designs providing
            a cost-effective solution to real-world implementation challenges.
          </p>
        </div>

        <div class="bg-white p-6 mt-4 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold">Support</h2>
          <p class="mt-4">
            We can provide support as required for all the products we provide.
            This can include troubleshooting, diagnosing, and reconfiguring
            devices, working remotely or on-site depending.
          </p>
        </div>

        <div class="bg-white p-6 mt-4 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold">MikroTik Quick Guide</h2>
          <p class="mt-4">
            This is a brief document detailing the troubleshooting steps
            required to resolve the most common configuration requirements for
            Mikrotik products.
          </p>
          <p class="mt-4">
            The document can be viewed{" "}
            <a
              href="https://docs.google.com/document/d/1p-z6f6MMBIbKl35v4EwRgKx5YRUyui0iOpzDnq4ZIgc/edit"
              target="_blank"
              class="text-blue-500 hover:underline"
            >
              here
            </a>
            .
          </p>
        </div>

        <div class="bg-white p-6 mt-4 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold">Training</h2>
          <p class="mt-4">
            Our team of engineers can train you and your staff to get the best
            out of your network. Our teams include certified installers and
            trainers who can work with your own to ensure you implement and
            maintain using the industry best practices.
          </p>
        </div>

        <div class="bg-white p-6 mt-4 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold">SimplifiApp for MikroTik</h2>
          <p class="mt-4">
            We have developed our own software for managing Mikrotik devices
            making common user-requested features easy and accessible.
          </p>
          <ul class="list-disc ml-6 mt-4">
            <li>
              Blocking websites (such as Facebook, Twitter, Youtube, etc.)
            </li>
            <li>Bandwidth limiting per client</li>
            <li>Restricting the number of connected clients</li>
          </ul>
          <p class="mt-4">
            For documentation click{" "}
            <a
              href="https://simplifinetworks.com/v4/SimplifiApp/SimplifiApp.pdf"
              target="_blank"
              class="text-blue-500 hover:underline"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
    </FramerMotion>
  );
};

export default Services;
