import { Ping } from "./Ping";
import { ProgressBar } from "./ProgressBar";
import { Technologies } from "./Technologies";

export const Card = () => {
  return (
    <div>
      <div className="shadow-sm shadow-black/20 p-5 rounded-lg flex flex-col gap-3 relative">
        {/* Ping */}
        <Ping />

        {/* Header */}
        <div className="flex items-center gap-5">
          <img
            src="./logos/codery.png"
            className="w-14 object-contain"
            alt=""
          />
          <div className="leading-4">
            <h5 className="font-bold mb-2">Codery</h5>
            <small className="text-gray-500">
              Su objetivo es crear una experiencia de compra unica entre
              restaurantes y clientes finales.
            </small>
          </div>
        </div>

        {/* Body */}
        <ProgressBar />
        <Technologies />
      </div>
    </div>
  );
};
