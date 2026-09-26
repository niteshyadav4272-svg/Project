const SectionTitle = ({ subtitle, title }) => {
  return (
    <div className="mb-14">
      <p className="mb-3 text-sm font-medium uppercase tracking-[4px] text-red-500">
        {subtitle}
      </p>

      <h2 className="text-4xl font-bold text-white sm:text-5xl">
        {title}
      </h2>

      <div className="mt-5 h-1 w-16 bg-red-500" />
    </div>
  );
};

export default SectionTitle;