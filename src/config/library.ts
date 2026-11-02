export interface Area {
  id: string;
  title: string;
  description: string;
  subjects: string[];
}

export interface Subject {
  title: string;
  area: string;
  description: string;
  icon: string;
}

export const areas: Area[] = [
  {
    id: "development",
    title: "Desarrollo",
    description: "Principios y técnicas para crear software claro, útil y fácil de mantener.",
    subjects: ["design-patterns", "clean-code", "refactoring"],
  },
  {
    id: "devops",
    title: "DevOps",
    description: "Infraestructura, automatización y servicios que conectan desarrollo y operaciones.",
    subjects: ["aws"],
  },
  {
    id: "languages",
    title: "Idiomas",
    description: "Vocabulario, gramática y expresiones para aprender una lengua paso a paso.",
    subjects: ["english", "galician"],
  },
];

export const subjects: Record<string, Subject> = {
  aws: { title: "Amazon Web Services", area: "devops", description: "Servicios cloud, infraestructura, redes, seguridad y arquitectura en AWS.", icon: "AWS" },
  "design-patterns": { title: "Patrones de diseño", area: "development", description: "Soluciones reutilizables para problemas habituales de diseño de software.", icon: "01" },
  "clean-code": { title: "Clean code", area: "development", description: "Hábitos y criterios para escribir código fácil de leer y modificar.", icon: "02" },
  refactoring: { title: "Refactorización", area: "development", description: "Técnicas para mejorar la estructura interna del código de forma segura.", icon: "03" },
  english: { title: "Inglés", area: "languages", description: "Vocabulario, gramática y materiales para estudiar inglés.", icon: "EN" },
  galician: { title: "Gallego", area: "languages", description: "Vocabulario, gramática y materiales para estudiar gallego.", icon: "GL" },
};
