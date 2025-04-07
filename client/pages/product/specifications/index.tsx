import { Fragment } from "react";
type SpecsProps = {
  specs: {
    brand?: string;
    weight?: string | number;
    dimensions?: string;
    model_code?: string;
    colour?: string;
  };
};

const specLabels: Record<keyof SpecsProps["specs"], string> = {
  brand: "Brand",
  weight: "Item weight (g)",
  dimensions: "Dimensions (cm)",
  model_code: "Item Model number",
  colour: "Colour",
};

function Specifications({ specifications }: { specifications: any }) {
  return (
    <div className="specifications">
      <h3>Specifications</h3>

      <div className="specGrid">
        {Object.entries(specifications).map(([key, value]) => {
          if (!value) return null;
          return (
            <Fragment key={key}>
              <p>{specLabels[key as keyof typeof specLabels]}</p>
              <p>{value}</p>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Specifications;
