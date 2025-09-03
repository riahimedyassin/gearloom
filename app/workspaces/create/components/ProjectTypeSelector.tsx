"use client";

interface ProjectType {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

interface ProjectTypeSelectorProps {
  projectTypes: ProjectType[];
  selectedType: string;
  onSelectType: (typeId: string) => void;
}

export function ProjectTypeSelector({
  projectTypes,
  selectedType,
  onSelectType,
}: ProjectTypeSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projectTypes.map((type) => (
        <div
          key={type.id}
          className={`p-6 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
            selectedType === type.id
              ? "border-blue-500 bg-blue-50"
              : "border-slate-200 hover:border-slate-300"
          }`}
          onClick={() => onSelectType(type.id)}
        >
          <div className="flex items-start gap-4">
            <div className="text-3xl">{type.icon}</div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">{type.name}</h3>
              <p className="text-slate-600 text-sm">{type.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
