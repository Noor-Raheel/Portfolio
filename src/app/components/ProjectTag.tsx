import React from "react";

// Define the types for props
interface ProjectTagProps {
  name: string;             // The name of the tag
  onClick: (name: string) => void; // The callback function to handle click events
  isSelected: boolean;      // Determines if the tag is selected
}

const ProjectTag: React.FC<ProjectTagProps> = ({ name, onClick, isSelected }) => {
  // Define the button styles based on whether the tag is selected
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}  // Trigger the onClick handler when clicked
    >
      {name}
    </button>
  );
};

export default ProjectTag;
