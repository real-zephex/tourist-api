import Navbar from "@/components/ui/navbar";
import HomepageCards from "@/components/ui/homepage-posts";

const Homepage = async () => {
  return (
    <main data-theme="dark" className="container mx-auto">
      <HomepageCards config="" />
    </main>
  );
};

export default Homepage;
