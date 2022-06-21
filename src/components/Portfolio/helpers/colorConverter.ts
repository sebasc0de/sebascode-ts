export const colorConverter = (techonology: string): string => {
  switch (techonology) {
    case "typescript":
      return "bg-blue-600";

    case "zustand":
      return "bg-orange-300";

    case "react-router-dom":
      return "bg-red-500";

    case "wp":
      return "bg-blue-500";

    case "html":
      return "bg-red-500";

    case "php":
      return "bg-cyan-500";

    case "bootstrap":
      return "bg-purple-500";

    case "elementor":
      return "bg-pink-500";

    case "woocommerce":
      return "bg-violet-500";

    case "reactjs":
      return "bg-cyan-500";

    case "firebase":
      return "bg-orange-500";

    case "redux":
      return "bg-violet-500";

    case "commercejs":
      return "bg-green-500";

    default:
      return "bg-gray-500";
  }
};
