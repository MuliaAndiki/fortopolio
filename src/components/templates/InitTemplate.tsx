interface InitialTemplateProps {
  title: string;
  desc: string;
}

const InitialTemplateScreen: React.FC<InitialTemplateProps> = ({ desc, title }) => {
  return (
    <main className="w-full min-h-screen flex justify-center items-center flex-col  ">
      <h1 className="text-2xl font-bold">{title}</h1>
      <h1 className="text-2xl font-bold">{desc}</h1>
    </main>
  );
};

export default InitialTemplateScreen;
