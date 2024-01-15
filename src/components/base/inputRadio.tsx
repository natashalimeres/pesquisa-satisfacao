type RadioProps = {
  label: string;
  value: string | number;
  checked: boolean;
  onChange: (value: string | number) => void;
  labelPosition: "top" | "left" | "right" | "bottom";
};

function Radio({ label, checked, value, onChange, labelPosition }: RadioProps) {
  const handleClick = () => {
    onChange(value);
  };

  const getFlexDirection = () => {
    switch (labelPosition) {
      case "bottom":
        return "flex-col";
      case "left":
        return "flex-row-reverse";
      case "right":
        return "flex-row";
      case "top":
        return "flex-col-reverse";
    }
  };

  return (
    <div
      className={`flex ${getFlexDirection()} items-center gap-2 cursor-pointer select-none`}
      onClick={handleClick}
    >
      <div className="w-4 h-4 rounded-full border-2 border-stone-800 flex items-center justify-center">
        {checked ? (
          <div className="w-2 h-2 rounded-full bg-stone-800"></div>
        ) : null}
      </div>
      <label className="text-sm ">{label}</label>
    </div>
  );
}

export default Radio;
