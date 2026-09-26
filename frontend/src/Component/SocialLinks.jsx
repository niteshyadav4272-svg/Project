
import portfolioData from "../data/portfolioData";
const SocialLinks = () => {
  const links = portfolioData.socialLinks
   

  return (
    <div className="flex gap-3">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target={link.name !== "Email" ? "_blank" : undefined}
          rel={link.name !== "Email" ? "noreferrer" : undefined}
          className="rounded-md border border-gray-700 px-4 py-2 text-sm text-gray-300 transition duration-300 hover:border-red-500 hover:text-red-500"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;