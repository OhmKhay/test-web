export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: "2.7K+",
      description: "Students",
    },
    {
      quantity: "20+",
      description: "Lecturers",
    },
    {
      quantity: "4",
      description: "Departments",
    },
    {
      quantity: "6",
      description: "Programme",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map(({ quantity, description }: statsProps) => (
          <div
            key={description}
            className="space-y-2 text-center"
          >
            <h2 className="text-3xl font-bold sm:text-4xl ">{quantity}</h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
