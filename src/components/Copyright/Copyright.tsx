const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-navBg py-4 text-center">
      <p className="text-sm text-gradientTo">
        &copy; {currentYear} Malena Design Atelier
      </p>
    </div>
  );
};

export default Copyright;
