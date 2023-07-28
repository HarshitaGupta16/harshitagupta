import { backendTechStack, frontendTechStack } from "../../utils/techStackData";

interface TechSkillsListProps {
  skillsList: {
    skill: string;
    icon: string;
    bgColor?: string;
  }[];
}

const TechStack = () => {
  return (
    <div style={{ paddingLeft: "120px" }}>
      <h1>Tech Stack</h1>
      <TechSkillsList skillsList={frontendTechStack} />
      <TechSkillsList skillsList={backendTechStack} />
    </div>
  );
};

const TechSkillsList = ({ skillsList }: TechSkillsListProps) => {
  return (
    <div style={{ display: "flex", width: "800px", marginBottom: "40px" }}>
      {skillsList.map((item) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginRight: "30px",
          }}
          key={item.skill}
        >
          <img
            src={item.icon}
            style={{ width: "60px", height: "60px", background: item?.bgColor }}
          />
          <span>{item.skill}</span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
